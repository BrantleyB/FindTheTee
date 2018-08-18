class Course
    attr_reader :id, :name, :image, :location, :description, :difficulty
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'courses_development')
    end

    # initialize options hash
    def initialize(opts = {})
        @id = opts["id"].to_i
        @name = opts["name"]
        @image = opts["image"]
        @location= opts["location"]
        @description = opts["description"]
        @difficulty = opts["difficulty"].to_i
        if opts["user"]
          @user = opts["user"]
        end
    end

    # get all
    def self.all
      results = DB.exec(
          <<-SQL
              SELECT
                  courses.*,
                  users.username,
                  users.password
              FROM courses
              LEFT JOIN users
                  ON courses.user_id = users.id
          SQL
      )
      return results.map do |result|
            if result["user_id"]
                user = {
                  "id" => result["user_id"].to_i,
                    "username" => result["username"],
                    "password" => result["password"]
                }
            else
                user = nil
            end
            Course.new(
                {
                    "id" => result["id"].to_i,
                    "name" => result["name"],
                    "image" => result["image"],
                    "user" => user,
                    "location" => result["location"],
                    "description" => result["description"],
                    "difficulty" => result["difficulty"].to_i
                }
            )
        end
    end

    # get one by id
    def self.find(id)
        results = DB.exec(
            <<-SQL
                SELECT
                    courses.*,
                    users.username,
                    users.password
                FROM courses
                LEFT JOIN users
                    ON courses.user_id = users.id
                WHERE courses.id=#{id};
            SQL
        )
        result = results.first
        if result["user_id"]
            user =
                {
                  "id" => result["user_id"].to_i,
                    "username" => result["username"],
                    "password" => result["password"]
                }
        else
            user = nil
        end
        return {
          "id" => result["id"].to_i,
          "name" => result["name"],
          "image" => result["image"],
          "user" => user,
          "location" => result["location"],
          "description" => result["description"],
          "difficulty" => result["difficulty"].to_i
        }
    end

    # create one
    def self.create(opts)
      results = DB.exec(
          <<-SQL
              INSERT INTO courses (name, image, location, description, difficulty, user_id)
              VALUES (
                '#{opts["name"]}',
                 '#{opts["image"]}',
                 '#{opts["location"]}',
                 '#{opts["description"]}',
                 #{opts["difficulty"]},
                #{opts["user_id"] ? opts["user_id"] : "NULL"} )
              RETURNING id, name, image, location, description, difficulty, user_id;
          SQL
      )
      return Course.new(results.first)
    end

    # delete one (by id)
    def self.delete(id)
      results = DB.exec("DELETE FROM courses WHERE id=#{id};")

      return { "deleted" => true }
    end

    # update one (by id)
    def self.update(id, opts)
      results = DB.exec(
          <<-SQL
              UPDATE courses
              SET
              '#{opts["name"]}',
               '#{opts["image"]}',
               '#{opts["location"]}',
               '#{opts["description"]}',
               #{opts["difficulty"]},
              #{opts["user_id"] ? opts["user_id"] : "NULL"}
              WHERE id=#{id}
              RETURNING id, name, image, location, description, difficulty, user_id;
          SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "image" => results.first["image"],
        "location" => results.first["location"],
        "description" => results.first["description"],
        "difficulty" => results.first["difficulty"].to_i,
        "user_id" => results.first["user_id"].to_i
      }
    end

    # update courses
    def self.setUser(course_id, user)
    results = DB.exec(
        <<-SQL
            UPDATE courses
            SET user_id = #{user.id}
            WHERE id = #{course_id}
            RETURNING id, username, password;
        SQL
    )
    return Course.new(results.first)
  end
end
