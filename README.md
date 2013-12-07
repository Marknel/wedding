## Mark & Regine's Wedding Invite Application
This application is designed to simplify the RSVP process for Regine Tan and Mark Cracknell's wedding.

The application is simple and consists of an invite model that enables guests to respond to the wedding invitation with various information.

The application is currently available at http://regineandmark.com

### Requirements
* Ruby 2.0.0+
* Rails 4.0+

### Getting Started
1. Download the repository.
2. Ensure dependencies are installed.
3. Run:
        
        $ rails server
        

#### Notes
The invite model contains:

* Name of invitees - string
* Custom URL - string
* Dietry Requirements - text
* Invited to ceremony - boolean
* Invited to reception - boolean
* Attending ceremony - integer
* Attending reception - integer
* First viewed at - datetime
* Most recently viewed at - datetime


#### Jobs to do
* Lock out public access to invites#index


#### Questions for Nathan
* How to do a before filter to verify that the newly set URL is unique
* How to redirect to invites#index after creating a new record