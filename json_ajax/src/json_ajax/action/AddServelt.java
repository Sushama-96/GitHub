package json_ajax.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import json_ajax.bean.Student;


@WebServlet("/AddServelt")
public class AddServelt extends HttpServlet {
	
       
  
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      String name = request.getParameter("name");
      String address = request.getParameter("address");
      String country = request.getParameter("country");
      String email = request.getParameter("email");
      String gender = request.getParameter("gender");
      String skills = request.getParameter("skills");
      String age = request.getParameter("age");
      String birthDate = request.getParameter("BirthDate");  
      
      Student stud = new Student();
      
      stud.setName(name);
      stud.setAddress(address);
      stud.setCountry(country);
      stud.setEmail(email);
      stud.setGender(gender);
      stud.setSkills(skills);
      stud.setAge(age);
      stud.setBirthDate(birthDate);
      
     
     
     DAO.stud(stud);
     
	}
	
	


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}

