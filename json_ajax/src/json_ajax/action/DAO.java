package json_ajax.action;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import json_ajax.bean.Student;

public class DAO {
	

    static String URL = "jdbc:mysql://localhost:3306/student";
	static String Username = "root";
	static String Password = "root";	
	public static void stud(Student stud) {
		
	
	try {
		Class.forName("com.mysql.jdbc.Driver");
	
	Connection con = DriverManager.getConnection(URL,Username,Password);
	PreparedStatement ps = con.prepareStatement("insert into student_table(name,address,country,email,gender,skills,age,birthDate) values(?,?,?,?,?,?,?,? )");;
	
	ps.setString(1, stud.getName());
	ps.setString(2, stud.getAddress());
	ps.setString(3, stud.getCountry());
	ps.setString(4, stud.getEmail());
	ps.setString(5, stud.getGender());
	ps.setString(6, stud.getSkills());
	ps.setString(7, stud.getAge());
	ps.setString(8, stud.getBirthDate());	
	
    boolean flag = ps.execute();
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}catch (Exception e) {
		e.printStackTrace();
	}
	}
	
	public static ArrayList<Student> getStudentData() {
		 ArrayList<Student> al=null;
		
		try {
				Class.forName("com.mysql.jdbc.Driver");
				Student stud = null;
				Connection con = DriverManager.getConnection(URL,Username,Password);
				PreparedStatement ps = con.prepareStatement("select * from student_table");
				 al=new  ArrayList<Student>();
				 
				ResultSet rs = ps.executeQuery();
				while(rs.next()) {
				stud = new Student();
				stud.setRollno(rs.getInt("RollNo"));
				stud.setName(rs.getString("name"));
				stud.setAddress(rs.getString("address"));
				stud.setCountry(rs.getString("country"));
				stud.setEmail(rs.getString("email"));
				stud.setGender(rs.getString("gender"));
				stud.setSkills(rs.getString("skills"));
				stud.setAge(rs.getString("age"));
				stud.setBirthDate(rs.getString("BirthDate"));
				al.add(stud);
			}
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return al;
		
	}
	
	public static void UpdateData(Student stud) {
		
		try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection(URL,Username,Password);
				PreparedStatement ps = con.prepareStatement("update from Student_table set name=?, address=?, country=?, email=?, gender=?, skills=?, age=?, BirthDate=? where RollNo=? ");
				ps.setString(1, stud.getName());
				ps.setString(2, stud.getAddress());
				ps.setString(3, stud.getCountry());
				ps.setString(4, stud.getEmail());
				ps.setString(5, stud.getGender());
				ps.setString(6, stud.getSkills());
				ps.setString(7, stud.getAge());
				ps.setString(8, stud.getBirthDate());
				
				DAO.stud(stud);	
				
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void DeleteData(int RollNo) {
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection(URL,Username,Password);
			PreparedStatement ps = con.prepareStatement("delete from Student_table where RollNo=?");
			ps.setInt(1,RollNo);
			ps.execute();
		}catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
