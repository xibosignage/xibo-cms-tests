Feature: Login
	I visit the Xibo CMS and want to login

	Scenario: Login
		Given I visit the Xibo CMS
		When the 'login-form' form is visible
			And I enter 'dan' into 'username'
			And I enter 'dan' into 'password'
			And I press the login button
		Then I should see the dashboard