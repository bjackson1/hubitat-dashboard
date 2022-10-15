import groovy.util.GroovyTestSuite
import junit.framework.Test
import junit.textui.TestRunner

class AllTests {
    static Test suit() {
        def allTests = new GroovyTestSuite()
        //allTests.adddTestSuite()
        return allTests
    }
}

TestRunner.run(AllTests.suite())