import React, {FC} from "react";
import Settings from "../../components/Settings/Settings";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {savePhoto} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {

}

type MapDispatchPropsType = {
    savePhoto: (file: File) => void;
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class SettingsContainer extends React.Component<PropsType> {

    render() {

        return (
            <Settings
                     isOwner = {!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}

            />
        );
    }
}


let mapStateToProps = (state: RootStateType): MapStatePropsType => ({


})


export default compose<FC>(connect(mapStateToProps,
    {savePhoto}), withRouter, withAuthRedirect)(SettingsContainer);