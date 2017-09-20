package json_ajax.action;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import json_ajax.bean.Student;

@WebServlet("/save_servlet")
public class save_servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Student stud = new Student();

		String name = request.getParameter("name");
		String address = request.getParameter("address");
		String country = request.getParameter("ccc");
		String email = request.getParameter("email");
		String gender = request.getParameter("gender");
		String skills = request.getParameter("skills");
		String age = request.getParameter("age");
		String birthDate = request.getParameter("BirthDate");
		System.out.println(country);
		stud.setName(name);
		stud.setAddress(address);
		stud.setCountry(country);
		stud.setEmail(email);
		stud.setGender(gender);
		stud.setSkills(skills);
		stud.setAge(age);
		stud.setBirthDate(birthDate);
		System.out.println(stud);
		DAO.stud(stud);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
