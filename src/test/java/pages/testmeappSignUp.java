package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class testmeappSignUp {
	@FindBy(how=How.CSS,using="input[name='userName']")
	public static WebElement username;
    @FindBy(how=How.ID,using="firstName")
	public static WebElement fname;
    @FindBy(how=How.ID,using="lastName")
	public static WebElement lname;
    @FindBy(how=How.ID,using="password")
	public static WebElement password;
    @FindBy(how=How.CSS,using="input[id='pass_confirmation']")
    public static WebElement cpassworod;
    @FindBy(how=How.CSS,using="input[value='Male']")
	public static WebElement gender;
    @FindBy(how=How.CSS,using="input[id='emailAddress']")
	public static WebElement email;
    @FindBy(how=How.CSS,using="input[name='mobileNumber']")
	public static WebElement m1;
    @FindBy(how=How.CSS,using="input[name='dob']")
	public static WebElement dob;
    @FindBy(how=How.CSS,using="textarea[name='address']")
	public static WebElement address;
    @FindBy(how=How.CSS,using="select[id='securityQuestion']")
    public static WebElement sq;
    @FindBy(how=How.CSS,using="input[name='answer']")
    public static WebElement ans;
    @FindBy(how=How.CSS,using="input[value='Register']")
    public static WebElement reg;
	
}
