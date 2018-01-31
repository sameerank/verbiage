import React, { Component } from 'react';
import {red400, green400, blueGrey900, blueGrey100} from 'material-ui/styles/colors'
import {Tooltip} from 'react-lightweight-tooltip';

const greyRoundedStyle = {
  content: {
    backgroundColor: blueGrey900,
    color: blueGrey100,
  },
  tooltip: {
    backgroundColor: blueGrey900,
    borderRadius: '10px',
  },
  arrow: {
    borderTop: 'solid #263238 5px',
  },
};

class AnnotatedDescription extends Component {
    render () {
        const word_importances = this.props.classifier.as_list[this.props.ageRange];
        let standardized_text_list = this.props.classifier.standardized_text.split(' ');
        for (var i = 0; i < word_importances.length; i++) {
            let wrd = word_importances[i][0];
            let importance = word_importances[i][1];
            standardized_text_list = standardized_text_list.map(
                (origWord, idx) => {
                    if (origWord === wrd) {
                        return (
                            <span key={idx}>
                                <Tooltip content={ importance.toString() } styles={ greyRoundedStyle }>
                                    <span style={{color: (importance >= 0 ? green400 : red400)}}>{origWord}</span>
                                </Tooltip>
                            </span>
                        );
                    }
                    return origWord;
                }
            )
        }
        return (<span>{ standardized_text_list.reduce((prev, curr) => [prev, ' ', curr]) }</span>);
    }
}

export default AnnotatedDescription;