import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
/* import '../style/Applications.css';*/

class Applications extends Component {
  render() {
    const { applications } = this.props;

    const ApplicationsList = (props) => {
      return applications.map((application, index) => {
        const date = new Date(application.quiz.date).toLocaleDateString("ru");
        return (
        <div key={index}>
          <Link to={'/application/' + index} className='list-item'>
            <div>
              Черновик заявки от { date }
              <ApplicantInfo application={ application }/>
            </div>
          </Link>
          <hr/>
        </div>
        )
      });
    };

    return (
      <div className="App">
        <ApplicationsList />
      </div>
    );
  }
}

const ApplicantInfo = props => {
  const { application } = props;
  const info = [];
  if (application.base) {
    info.push(<p>
      Заявитель: {application.base.name}
    </p>);
  }
  return info;
};

const mstp = ({ applications }) => ({ applications });
export default connect(mstp)( Applications );
