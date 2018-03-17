import React from 'react'
import {Page, SiteContent} from './utils'

const PasswordChange = ()=>(
    <Page className="app-auth model-user change-list"
            urls={[{url:"",text:"Password Change"}]}>
            <SiteContent headerText="Select user to change">
                
            </SiteContent>
        </Page>
)
export default PasswordChange