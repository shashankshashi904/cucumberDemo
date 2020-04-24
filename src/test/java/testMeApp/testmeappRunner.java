package testMeApp;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:src/testmeapp-report","json:src/testmeapp-report/report1.json"},monochrome=true,
                        features= {"src/test/resources/testMeApp/testmeappRegistration.feature"})
public class testmeappRunner {

}
