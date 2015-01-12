Feature: View the Calendar

	Scenario: View the Calendar without any Display Groups selected
		Given I visit the Xibo CMS
			And I am logged in as a 'super admin'
			And I visit 'the schedule'
		Then the 'Calendar' is visible
