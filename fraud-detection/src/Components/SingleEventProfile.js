import React from 'react'

const EventProfile = ({event}) => {
  const {
    acct_type,
    approx_payout_date,
    body_length,
    channels,
    country,
    currency,
    delivery_method,
    description,
    email_domain,
    event_created,
    event_end,
    event_published,
    event_start,
    fb_published,
    has_analytics,
    has_header,
    has_logo,
    listed,
    name,
    name_length,
    object_id,
    org_desc,
    org_facebook,
    org_name,
    org_twitter,
    payee_name,
    payout_type,
    previous_payouts,
    sale_duration,
    show_map,
    ticket_types,
    user_age,
    user_created,
    user_type,
    venue_address,
    venue_country,
    venue_latitude,
    venue_longitude,
    venue_name,
    venue_state
  } = event

  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <h1 className="text-center">Event Profile Page</h1>
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col>
            <h3>acct_type: {acct_type}</h3>
            <h3>approx_payout_date: {approx_payout_date}</h3>
            <h3>body_length: {body_length}</h3>
            <h3>channels: {channels}</h3>
            <h3>Company: {company}</h3>
            <h3>currency: {currency}</h3>
            <h3>delivery_method: {delivery_method}</h3>
            <h3>description: {description}</h3>
            <h3>email_domain: {email_domain}</h3>
            <h3>event_created: {event_created}</h3>
            <h3>event_end: {event_end}</h3>
            <h3>event_published: {event_published}</h3>
            <h3>event_start: {event_start}</h3>
            <h3>fb_published: {fb_published}</h3>
            <h3>has_analytics: {has_analytics}</h3>
            <h3>has_header: {has_header}</h3>
            <h3>has_logo: {has_logo}</h3>
            <h3>listed: {listed}</h3>
            <h3>name: {name}</h3>
            <h3>name_length: {name_length}</h3>
            <h3>object_id: {object_id}</h3>
            <h3>org_desc: {org_desc}</h3>
            <h3>org_facebook: {org_facebook}</h3>
            <h3>org_name: {org_name}</h3>
            <h3>org_twitter: {org_twitter}</h3>
            <h3>payee_name: {payee_name}</h3>
            <h3>payout_type: {payout_type}</h3>
            <h3>previous_payouts: {previous_payouts}</h3>
            <h3>sale_duration: {sale_duration}</h3>
            <h3>show_map: {show_map}</h3>
            <h3>user_age: {user_age}</h3>
            <h3>user_created: {user_created}</h3>
            <h3>user_type: {user_type}</h3>
            <h3>venue_address: {venue_address}</h3>
            <h3>venue_country: {venue_country}</h3>
            <h3>venue_latitude: {venue_latitude}</h3>
            <h3>venue_longitude: {venue_longitude}</h3>
            <h3>venue_name: {venue_name}</h3>
            <h3>venue_state: {venue_state}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EventProfile
