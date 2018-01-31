import React, { Component } from 'react';
import {red400, green400} from 'material-ui/styles/colors'

class AnnotatedDescription extends Component {
    render () {
        const word_importances = this.props.classifier.as_list[this.props.ageRange];
        let standardized_text_list = this.props.classifier.standardized_text.split(' ');
        for (var i = 0; i < word_importances.length; i ++ ) {
            let wrd = word_importances[i][0];
            let importance = word_importances[i][1];
            standardized_text_list = standardized_text_list.map(
                (origWord, idx) => {
                    if (origWord === wrd) {
                        return (
                            <span style={{color: (importance >= 0 ? green400 : red400)}} key={idx}>
                            {origWord}
                            { idx !== standardized_text_list.length ? ' ' : ''}
                            </span>
                        );
                    }
                    return origWord;
                }
            )
        }
        return (<span>{ standardized_text_list }</span>);
    }
}

export default AnnotatedDescription;