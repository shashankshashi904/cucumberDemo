package skeleton;

import cucumber.api.java.en.Given;

public class CucumberExpressionDemoFeature {
	
	@Given("{word} has {int} cucumber(s) in (his|her) bag")
	public void john_has_cucumber_in_his_bag(String name,Integer no) {
	    System.out.println(name+" has "+no+" cucumber ");
	}

}
