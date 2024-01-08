export default function Calendar () {
 
  let googleApi = window.gapi;
  let API_KEY = "AIzaSyC6PepjSxumZcd9i79tPo3sPOCxc5xklpw";
  let CLIENT_ID = "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";
  let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  googleApi.load('client:auth2', () => {
    googleApi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
  });   
  
  googleApi.client.load('calendar', 'v3')

  googleApi.auth2.getAuthInstance().signIn()
  .then(() => {
    let event = {
      'summary': 'Google I/O 2015',
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'A chance to hear more about Google\'s developer products.',
        'start': {
          'dateTime': '2015-05-28T09:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2015-05-28T17:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'recurrence': [
          'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
          {'email': 'lpage@example.com'},
          {'email': 'sbrin@example.com'}
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
    }

    let request = googleApi.client.calendar.events.insert({
      'calendarId' : 'primary',
      'resource' : event
    })

    request.execute(event=> {
      window.open(event.htmlLink)
      })
    })
  })
}