import React from "react"
import autoBind from "react-autobind"
import { Vocabulary} from "./components/languages/Vocabulary"

/** @instance @type {AppContext} */
export const AppCtxStore = React.createContext({})

export const user = {
    id: 0
}

export default class AppContext extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this);

        let languageCode = localStorage.getItem("language");

        if (languageCode === null || languageCode === '') {
            languageCode = "en_GB"
        }

        this.state = {
            languageCode: languageCode,
            vocabulary: Vocabulary(languageCode)
        }
    }

    /**
     * Actions
     * @param {*} languageCode 
     */
    async setUser(languageCode) {
        await this.setState({
            languageCode: languageCode,
            vocabulary: Vocabulary(languageCode)
        })

    }
    
    getLanguageCode() {
        return this.state.languageCode ? this.state.languageCode : 'en_GB';
    }

    getVocabulary() {
        return this.state.vocabulary ? this.state.vocabulary : Vocabulary('en_GB');
    }

    render() {
        return <AppCtxStore.Provider value={this}>
            <AppCtxStore.Consumer>
                {context => this.props.children(context)}
            </AppCtxStore.Consumer>
        </AppCtxStore.Provider>
    }
}
