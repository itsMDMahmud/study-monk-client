import React from 'react';

const CandidateList = ({singleUser, index}) => {
    const {displayName, email, jobRules, location } = singleUser;
    return (
        
            <tr>
              <th>{index + 1}</th>
              <td>{displayName}</td>
              <td>{email}</td>
              <td>{jobRules}</td>
              <td>{location}</td>
            </tr>
        
    );
};

export default CandidateList;