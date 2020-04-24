package skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;

public class LoginFeatureDefinitoin {
	WebDriver driver;
	@Given("The URl of demo web shop application")
	public void the_URl_of_demo_web_shop_application() {
	  
	    System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\drivers\\chromedriver.exe");
	    driver=new ChromeDriver();
	    PageFactory.initElements(driver, LoginPage.class);//this code for creating page objects
	    driver.get("http://demowebshop.tricentis.com/login");
	   
	}

	@When("User enters {word} as username")
	public void user_enters_kannan_gmail_com_as_username(String email) {
	    //driver.findElement(By.id("Email")).sendKeys(email);
		LoginPage.email.sendKeys(email);
	}

	@When("User enters {word} as password")
	public void user_enters_password_as_password(String password) {
	   //driver.findElement(By.id("Password")).sendKeys(password);
		LoginPage.password.sendKeys(password);
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
	    //driver.findElement(By.xpath("//input[@value='Log in']")).click();
	 LoginPage.loginButton.click();
	}

	@Then("the user login successfully")
	public void the_user_login_successfully() {
	   /* boolean flag=driver.findElement(By.linkText("Log out")).isDisplayed();
	    Assert.assertTrue(flag);*/
		Assert.assertEquals("Demo Web Shop", driver.getTitle());
	    driver.findElement(By.linkText("Log out")).click();
	    driver.close();
	}


}