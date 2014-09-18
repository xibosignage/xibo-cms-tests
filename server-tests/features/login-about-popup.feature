Feature: About Popup
	While we are logged out
	We need to make sure the about link is visible
	And that the popup opens when we click it

	Scenario: Visit the Xibo CMS
		Given I visit the Xibo CMS
		When I press the 'About' link
		Then I should see the dialog titled 'About'