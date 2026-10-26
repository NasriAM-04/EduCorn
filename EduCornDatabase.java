import java.sql.*;
import java.util.Scanner;

public class week4 {
    static final String URL = "jdbc:sqlite:database.db";

    public static Connection connect() throws SQLException {
        return DriverManager.getConnection(URL);
    }

    public static void setup() {
        try (Connection conn = connect(); Statement stmt = conn.createStatement()) {
            stmt.execute("CREATE TABLE IF NOT EXISTS Faculty (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, department TEXT)");
            stmt.execute("CREATE TABLE IF NOT EXISTS Course (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, credits INTEGER)");
            stmt.execute("CREATE TABLE IF NOT EXISTS Section (id INTEGER PRIMARY KEY AUTOINCREMENT, course_id INTEGER, semester TEXT)");
            stmt.execute("CREATE TABLE IF NOT EXISTS Enrollment (id INTEGER PRIMARY KEY AUTOINCREMENT, student_name TEXT, section_id INTEGER)");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void addFaculty(String name, String dept) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("INSERT INTO Faculty(name, department) VALUES(?, ?)")) {
            ps.setString(1, name);
            ps.setString(2, dept);
            ps.executeUpdate();
            System.out.println("Faculty added.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void listFaculty() {
        try (Connection conn = connect(); Statement stmt = conn.createStatement()) {
            ResultSet rs = stmt.executeQuery("SELECT * FROM Faculty");
            while (rs.next()) System.out.println(rs.getInt("id") + " | " + rs.getString("name") + " | " + rs.getString("department"));
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void updateFaculty(int id, String name, String dept) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("UPDATE Faculty SET name=?, department=? WHERE id=?")) {
            ps.setString(1, name);
            ps.setString(2, dept);
            ps.setInt(3, id);
            ps.executeUpdate();
            System.out.println("Faculty updated.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void addCourse(String title, int credits) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("INSERT INTO Course(title, credits) VALUES(?, ?)")) {
            ps.setString(1, title);
            ps.setInt(2, credits);
            ps.executeUpdate();
            System.out.println("Course added.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void listCourse() {
        try (Connection conn = connect(); Statement stmt = conn.createStatement()) {
            ResultSet rs = stmt.executeQuery("SELECT * FROM Course");
            while (rs.next()) System.out.println(rs.getInt("id") + " | " + rs.getString("title") + " | " + rs.getInt("credits"));
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void updateCourse(int id, String title, int credits) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("UPDATE Course SET title=?, credits=? WHERE id=?")) {
            ps.setString(1, title);
            ps.setInt(2, credits);
            ps.setInt(3, id);
            ps.executeUpdate();
            System.out.println("Course updated.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void addSection(int courseId, String semester) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("INSERT INTO Section(course_id, semester) VALUES(?, ?)")) {
            ps.setInt(1, courseId);
            ps.setString(2, semester);
            ps.executeUpdate();
            System.out.println("Section added.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void listSection() {
        try (Connection conn = connect(); Statement stmt = conn.createStatement()) {
            ResultSet rs = stmt.executeQuery("SELECT * FROM Section");
            while (rs.next()) System.out.println(rs.getInt("id") + " | Course ID: " + rs.getInt("course_id") + " | " + rs.getString("semester"));
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void updateSection(int id, int courseId, String semester) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("UPDATE Section SET course_id=?, semester=? WHERE id=?")) {
            ps.setInt(1, courseId);
            ps.setString(2, semester);
            ps.setInt(3, id);
            ps.executeUpdate();
            System.out.println("Section updated.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void addEnrollment(String studentName, int sectionId) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("INSERT INTO Enrollment(student_name, section_id) VALUES(?, ?)")) {
            ps.setString(1, studentName);
            ps.setInt(2, sectionId);
            ps.executeUpdate();
            System.out.println("Enrollment added.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void listEnrollment() {
        try (Connection conn = connect(); Statement stmt = conn.createStatement()) {
            ResultSet rs = stmt.executeQuery("SELECT * FROM Enrollment");
            while (rs.next()) System.out.println(rs.getInt("id") + " | " + rs.getString("student_name") + " | Section ID: " + rs.getInt("section_id"));
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void updateEnrollment(int id, String studentName, int sectionId) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("UPDATE Enrollment SET student_name=?, section_id=? WHERE id=?")) {
            ps.setString(1, studentName);
            ps.setInt(2, sectionId);
            ps.setInt(3, id);
            ps.executeUpdate();
            System.out.println("Enrollment updated.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void deleteEnrollment(int id) {
        try (Connection conn = connect(); PreparedStatement ps = conn.prepareStatement("DELETE FROM Enrollment WHERE id=?")) {
            ps.setInt(1, id);
            ps.executeUpdate();
            System.out.println("Enrollment deleted.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {
        setup();
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("\n1 Faculty | 2 Course | 3 Section | 4 Enrollment | 0 Exit");
            int choice = sc.nextInt(); sc.nextLine();
            if (choice == 0) break;
            switch (choice) {
                case 1:
                    System.out.println("1 Add 2 List 3 Update");
                    int f = sc.nextInt(); sc.nextLine();
                    if (f == 1) {
                        System.out.print("Name: "); String n = sc.nextLine();
                        System.out.print("Department: "); String d = sc.nextLine();
                        addFaculty(n, d);
                    } else if (f == 2) listFaculty();
                    else if (f == 3) {
                        System.out.print("ID: "); int id = sc.nextInt(); sc.nextLine();
                        System.out.print("New Name: "); String n = sc.nextLine();
                        System.out.print("New Department: "); String d = sc.nextLine();
                        updateFaculty(id, n, d);
                    }
                    break;
                case 2:
                    System.out.println("1 Add 2 List 3 Update");
                    int c = sc.nextInt(); sc.nextLine();
                    if (c == 1) {
                        System.out.print("Title: "); String t = sc.nextLine();
                        System.out.print("Credits: "); int cr = sc.nextInt(); sc.nextLine();
                        addCourse(t, cr);
                    } else if (c == 2) listCourse();
                    else if (c == 3) {
                        System.out.print("ID: "); int id = sc.nextInt(); sc.nextLine();
                        System.out.print("New Title: "); String t = sc.nextLine();
                        System.out.print("New Credits: "); int cr = sc.nextInt(); sc.nextLine();
                        updateCourse(id, t, cr);
                    }
                    break;
                case 3:
                    System.out.println("1 Add 2 List 3 Update");
                    int s = sc.nextInt(); sc.nextLine();
                    if (s == 1) {
                        System.out.print("Course ID: "); int cid = sc.nextInt(); sc.nextLine();
                        System.out.print("Semester: "); String sem = sc.nextLine();
                        addSection(cid, sem);
                    } else if (s == 2) listSection();
                    else if (s == 3) {
                        System.out.print("ID: "); int id = sc.nextInt(); sc.nextLine();
                        System.out.print("Course ID: "); int cid = sc.nextInt(); sc.nextLine();
                        System.out.print("Semester: "); String sem = sc.nextLine();
                        updateSection(id, cid, sem);
                    }
                    break;
                case 4:
                    System.out.println("1 Add 2 List 3 Update 4 Delete");
                    int e = sc.nextInt(); sc.nextLine();
                    if (e == 1) {
                        System.out.print("Student Name: "); String sn = sc.nextLine();
                        System.out.print("Section ID: "); int sid = sc.nextInt(); sc.nextLine();
                        addEnrollment(sn, sid);
                    } else if (e == 2) listEnrollment();
                    else if (e == 3) {
                        System.out.print("ID: "); int id = sc.nextInt(); sc.nextLine();
                        System.out.print("New Student Name: "); String sn = sc.nextLine();
                        System.out.print("New Section ID: "); int sid = sc.nextInt(); sc.nextLine();
                        updateEnrollment(id, sn, sid);
                    } else if (e == 4) {
                        System.out.print("ID: "); int id = sc.nextInt(); sc.nextLine();
                        deleteEnrollment(id);
                    }
                    break;
            }
        }
        sc.close();
    }
}
