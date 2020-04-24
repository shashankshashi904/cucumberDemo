package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class testmeappHome {
	@FindBy(how=How.PARTIAL_LINK_TEXT,using="SignUp")
	public static WebElement signup;
	@FindBy(how=How.PARTIAL_LINK_TEXT,using="SignIn")
	public static WebElement signin;

}
