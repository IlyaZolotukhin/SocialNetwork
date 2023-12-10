import React from "react";
import {ContactsType, ProfileType} from "../../../redux/Types";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'

type ProfileDataPropsType = {
    profile: ProfileType | null
    initialValues: ProfileType | null
}

export type ProfileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}

type PropsType = ProfileDataPropsType & ProfileFormDataType

const ProfileDataForm:  React.FC<InjectedFormProps<ProfileType, ProfileDataPropsType> & ProfileDataPropsType> =
    ({handleSubmit,error, profile }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        { error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            <b>Full name:</b>
            <Field placeholder={'Full name'} name={'fullName'} component={Input} validate={[required]}/>
        </div>
        <div>
            <b>Looking for a job:</b>
            <Field type={'checkbox'} name={'lookingForAJob'} component={"input"}/>
        </div>
        <div>
            <b>My professional skills:</b>
            <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Textarea} validate={[required]}/>
        </div>
        <div>
            <b>About me:</b>
            <Field placeholder={'About me'} name={'aboutMe'} component={Textarea} validate={[required]}/>
        </div>
        <div>
            <b>Contacts:</b> {profile && Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {<Field placeholder={key} name={'contacts.'+key} component={Input} validate={[required]}/>}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataPropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm