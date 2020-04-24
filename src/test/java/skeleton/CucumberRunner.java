package skeleton;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports","json:src/cucumber-reports/report1.json"},monochrome=true, dryRun=false,
                         features= {"src/test/resources/skeleton/cucumberexpressiondemo.feature","src/test/resources/skeleton/login.feature"})
public class CucumberRunner {

}
