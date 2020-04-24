package testMeApp;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;
import pages.testmeappHome;
import pages.testmeappSignUp;

public class testmeappRegistration {
	WebDriver driver;
	@Given("The URL of Test me app")
	public void the_URL_of_Test_me_app() {
		System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\drivers\\chromedriver.exe");
	    driver=new ChromeDriver();
		driver.manage().window().maximize();
		//PageFactory.initElements(driver, testmeappHome.class);

		driver.get("https://lkmdemoaut.accenture.com/TestMeApp/fetchcat.htm");
	}

	@Given("user clicks on sign up link")
	public void user_clicks_on_sign_up_link() {
		//testmeappHome.signup.click(); 
		driver.findElement(By.partialLinkText("SignUp")).click();
		System.out.println("Signup success");
	}

	@Given("user enters {word} as username")
	public void user_enters_uname_as_username(String username) {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		PageFactory.initElements(driver, testmeappSignUp.class);
	    testmeappSignUp.username.sendKeys(username);
		//driver.findElement(By.cssSelector("input[name='userName']")).sendKeys(username);
	}

	@Given("user enters {word} as firstname")
	public void user_enters_fname_as_firstname(String fname) {
	    testmeappSignUp.fname.sendKeys(fname);
	}

	@Given("user enters {word} as lastname")
	public void user_enters_lname_as_lastname(String lname) {
	   testmeappSignUp.lname.sendKeys(lname);
	}

	@Given("user enters {word} as password")
	public void user_enters_Password_as_password(String password) {
	   testmeappSignUp.password.sendKeys(password);
	}
	
	@Given("user enters {word} as cpassword")
	public void user_enters_cpassword_as_cpassword(String cpassword) {
		testmeappSignUp.cpassworod.sendKeys(cpassword);
	}

	@Given("user select male radio button from gender")
	public void user_select_male_radio_button_from_gender() {
	    testmeappSignUp.gender.click();
	}

	@Given("user enters {word} as email")
	public void user_enters_user_gmail_com_as_email(String email) {
	    testmeappSignUp.email.sendKeys(email);
	}

	@Given("user enters {word} number as mobilenumber")
	public void user_enters_number_as_mobilenumber(String m1) {
	    testmeappSignUp.m1.sendKeys(m1);
	}

	@Given("user enters {word} as date of birth")
	public void user_enters_as_date_of_birth(String dob) {
	    testmeappSignUp.dob.sendKeys(dob);
	}

	@Given("user enters {word} as address")
	public void user_enters_nokjsncns_as_address(String address) {
	    testmeappSignUp.address.sendKeys(address);
	}

	@Given("user select dropdown in security question")
	public void user_select_dropdown_in_security_question() {
	    testmeappSignUp.sq.click();
	}

	@Given("user enters {word} as answer")
	public void user_enters_answer_as_answer(String answer) {
	    testmeappSignUp.ans.sendKeys(answer);
	}

	@Given("user clicks Register button")
	public void user_clicks_Register_button() {
	   testmeappSignUp.reg.click();
	}

	@Then("the user Registered successfuly")
	public void the_user_Registered_successfuly() {
	   driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	   String title=driver.getTitle();
	   Assert.assertEquals("Login", title);
	   System.out.println("User registration Successfull");
	   driver.close();
	}


}
