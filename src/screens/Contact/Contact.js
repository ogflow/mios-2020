import React from 'react'
import { connect } from 'react-redux'

import './Contact.scss'
import { getContactPage } from '../../actions'
import {
  Button, Dropdown, Footer, Header, Offices, TextField, TextArea
} from '../../common'

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  render () {
    const { isLoaded } = this.state
    const { assets, contactPage } = this.props

    return isLoaded ? (
      <>
        <Header/>
        <ContactScreen data={contactPage} assets={assets} />
        <Footer/>
      </>
    ) : (
      <p>is loading.....</p>
    )
  }

  componentDidMount () {
    const { getContactPage } = this.props

    getContactPage().then(() => {
      this.setState({
        isLoaded: true
      })
    })
  }
}

const ContactScreen = ({ data, assets }) => {
  const {
    wantToTalkTitle,
    sendEmailText,
    email,
    callPhoneText,
    phone,
    getInTouchTitle,
    firstNameLabel,
    lastNameLabel,
    emailLabel,
    topicLabel,
    topicItems,
    companyLabel,
    roleLabel,
    messageFieldLabel,
    sendButtonText,
    officesTitle,
    officesItems,
  } = data

  return (
    <main className="contact-us-page">

      <section className="want-to-talk">
        <p className="text-h1">{wantToTalkTitle}</p>
        <div className="content">
          <div>
            <p className="text-subheading">{sendEmailText}</p>
            <a className="link" href={`mailto:${email}`}>{email}</a>
          </div>
          <div>
            <p className="text-subheading">{callPhoneText}</p>
            <a className="link" href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
      </section>

      <section className="get-in-touch">
        <p className="text-h1">{getInTouchTitle}</p>
        <div className="content">
          <form id="contact-form" method="POST" action="/">
            <div className="inline-fields">
              <TextField label={firstNameLabel} name="firstName" required={true} />
              <TextField label={lastNameLabel} name="lastName" required={true} />
            </div>
            <TextField label={emailLabel} name="email" required={true} />
            <Dropdown label={topicLabel} options={topicItems} name="topic" required={true} />
            <div className="inline-fields">
              <TextField label={companyLabel} name="company" />
              <TextField label={roleLabel} name="role" />
            </div>
            <TextArea label={messageFieldLabel} name="message" />
            <Button>{sendButtonText}</Button>
          </form>
        </div>
      </section>

      <section className="offices">
        <p className="text-h1">{officesTitle}</p>
        <div className="content">
          <Offices officesRefs={officesItems} assets={assets} />
        </div>
      </section>

    </main>
  )
}

const mapStateToProps = (state) => ({
  assets: state.assets,
  contactPage: state.contactPage,
})

export default connect(mapStateToProps, { getContactPage })(Contact)
