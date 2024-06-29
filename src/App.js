import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Choose the best plan from our Suite options</h1>
        <p style={styles.description}>
          You will be redirected to a secure payment page and Once you have completed your payment, you will be redirected back to your account.
        </p>
      </div>
      <div style={styles.loginContainer}>
        <p style={styles.text}>Enter your Name</p>
        <input type="name" placeholder="Enter your name" style={styles.input} />
        <p style={styles.text}>Enter your Email</p>
        <input type="email" placeholder="Enter your email address" style={styles.input} />
        <p style={styles.text}>Enter your Password</p>
        <input type="password" placeholder="Enter your password" style={styles.input}/>
      </div>
      <Card title="Learner Plan" cost="99.00"/>
      <Card title="Instructor plan" cost="299.00"/>
      <div style={styles.footerContainer}>
        <p style={styles.loginText}>
          <span> These plans are provided by </span>
          <span style={styles.fontSemibold}> Vidyarang</span>
        </p>
      </div>
    </div>
  );
}


function Card ({title, cost}) {
  return(
    <div style={styles.card}>
        <div style={styles.cardFooter}>
          <p style={styles.footerText}>
          {/* Monthly Learner plan */}
          {title}
          </p>
        </div>
        <div style={styles.cardContent}>
          <div style={styles.row}>
            <div>Application Cost</div>
            <div style={styles.fontMedium}>₹{cost}</div>
          </div>
          <div style={styles.row}>
            <div>Validity</div>
            <div style={styles.fontMedium}>One Month</div>
          </div>
          <div style={{...styles.row,marginTop:'10px',borderTop: '1px solid #e0e0e0',paddingTop:'10px'}}>
            <div>Total</div>
            <div style={styles.fontMedium}>₹{cost}.00 / month</div>
          </div>
        </div>
        <div style={{margin : "auto",textAlign  : 'center',padding : '10px'}}>
          <button style={styles.button}>Pay Now</button>
        </div>
      </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    gap: '16px',
    paddingTop : '80px'
  },
  textContainer: {
    textAlign: 'center'
  },
  icon: {
    margin: 'auto',
    height: '48px',
    width: '48px',
    color: 'green'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold !important',
    marginTop: '20px'
  },
  description: {
    marginTop: '12px',
    maxWidth: '600px',
    color: 'gray',
    fontSize : '14px'
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    marginTop: '32px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  },
  cardContent: {
    padding: '16px',
    display: 'grid',
    gap: '8px',
    fontSize: '14px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  fontMedium: {
    marginLeft: '8px',
    fontWeight: '500 !important'
  },
  cardFooter: {
    margin : 0,
    borderBottom: '1px solid #e0e0e0'
  },
  footerText: {
    fontSize: '22px',
    fontWeight: '700',
    textAlign : 'center',
    marginTop : '10px',
    marginBottom : '10px'
  },
  footerContainer: {
    marginTop: '32px',
    textAlign: 'center'
  },
  loginText: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'black'
  },
  fontSemibold: {
    fontWeight: '600 !important'
  },
  button: {
    marginTop: '12px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width : '100%'
  },
  input: {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '4px',
    width : '90%'
  },
  text : {
    fontSize: '14px',
    textAlign: 'left',
  },
  loginContainer: {
    marginTop: '32px',
    textAlign: 'center',
    maxWidth: '400px',
    width : '100%'
  },


};
