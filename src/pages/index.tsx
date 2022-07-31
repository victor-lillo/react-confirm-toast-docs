import React, { useState } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import Layout from '@components/Layout';
import Button from '@components/Button';
import Section from '@components/Section';
import Code from '@components/Code';
import GitHub from '@components/icons/GitHub';

import { ConfirmToast } from 'react-confirm-toast'
// import ConfirmToast from '@components/ConfirmToast';

import package_json from 'package.json'


interface CompProps {
    asModal?: boolean,
    children: React.ReactNode,
    showCloseIcon?: boolean,
    customCancel?: string,
    customConfirm?: string,
    customFunction: Function,
    message?: string,
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right',
    theme?: 'light' | 'dark' | 'snow' | 'lilac'
}

// We delete children and customFunction
type NewProps = Omit<CompProps, 'children' | 'customFunction'>

// We add a property to name the example
interface ExampleProps extends NewProps {
    name: string
}

const myFunction = () => {
    console.log('Confirmed!');
}

const options = {
    position: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
    theme: ['light', 'dark', 'snow', 'lilac']
}

const examples: ExampleProps[] = [
    {
        name: 'Example 1',
        asModal: false,
        showCloseIcon: true,
        customCancel: 'Cancel',
        customConfirm: 'Confirm',
        message: 'Do you want to continue and execute the function?',
        position: 'bottom-left' as const,
        theme: 'lilac' as const
    },
    {
        name: 'Example 2',
        asModal: false,
        showCloseIcon: true,
        customCancel: 'Cancel',
        customConfirm: 'Confirm',
        message: 'Do you want to continue and execute the function?',
        position: 'top-right' as const,
        theme: 'dark' as const
    },
    {
        name: 'Example 3',
        asModal: false,
        showCloseIcon: true,
        customCancel: 'Cancel',
        customConfirm: 'Confirm',
        message: 'Do you want to continue and execute the function?',
        position: 'top-left' as const,
        theme: 'light' as const
    },
    {
        name: 'Example 4',
        asModal: true,
        showCloseIcon: false,
        customCancel: 'Cancel',
        customConfirm: 'Confirm',
        message: 'Do you want to continue and execute the function?',
        position: 'top-left' as const,
        theme: 'snow' as const
    }
]

const Database: NextPage = () => {

    const [selectedExample, setSelectedExample] = useState(examples[0])

    const customProps = (e: React.MouseEvent) => {
        const name = (e.target as HTMLButtonElement).name
        const value = (e.target as HTMLButtonElement).value

        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

        setSelectedExample((prevState) => ({
            ...prevState,
            [name]: value,
            message: `${capitalizedName} set to ${value}`
        }))
    }

    const compString = (settings: ExampleProps) => {
        const { asModal, customCancel, customConfirm, message, position, showCloseIcon, theme, name } = settings

        let str = '<ConfirmToast\n'

        if (asModal || asModal === false) str += `\tasModal={${asModal}}\n`
        if (customCancel) str += `\tcustomCancel={'${customCancel}'}\n`
        if (customConfirm) str += `\tcustomConfirm={'${customConfirm}'}\n`
        str += `\tcustomFunction={myFunction}\n`
        if (message) str += `\tmessage={'${message}'}\n`
        if (position) str += `\tposition={'${position}'}\n`
        if (showCloseIcon || showCloseIcon === false) str += `\tshowCloseIcon={${showCloseIcon}}\n`
        if (theme) str += `\ttheme={'${theme}'}\n`
        str += `>\n`
        str += `\t<button> ${name} </button>\n`
        str += `</ConfirmToast>\n`
        return str
    }

    return (
        <Layout>
            <Head>
                <title>react-confirm-toast | Documentation </title>
                <meta name="description" content="A light and customizable confirm toast component."></meta>
            </Head>

            <Section width='full' background='black'>
                <div className='title-container'>
                    <div className="titles">
                        <h1>react-confirm-toast</h1>
                        <h3>Easy and light toast for confirming functions</h3>
                    </div>
                    <a target='_blank' href='https://github.com/fentosv/react-confirm-toast' rel='noopener noreferrer'>
                        <GitHub />
                    </a>
                </div>
            </Section>

            <Section>
                <div className='info-container'>
                    <h1>Information</h1>
                    <section>
                        <h3>Install the package</h3>
                        <Code language='bash'>{`yarn add react-confirm-toast`}</Code>
                        <h3>Import the component</h3>
                        <Code>{`import { ConfirmToast } from 'react-confirm-toast'`}</Code>
                        <h3>Add ConfirmToast to your app</h3>
                        <Code>
                            {`<ConfirmToast customFunction={myFunction}>\n\t{your clickable component}\n</ConfirmToast>`}
                        </Code>
                        <h3>Pass it your function and set it up. Check the examples below!</h3>
                    </section>

                </div>
            </Section>

            <Section>
                <h1>Examples</h1>

                <div className='example-container'>

                    <div className='code'>
                        <Code>
                            {compString(selectedExample)}
                        </Code>
                    </div>

                    <ConfirmToast
                        customFunction={myFunction}
                        childrenClassName='example-container_buttons'
                        {...selectedExample}
                    >
                        {examples.map((data, index) => {
                            return (
                                <Button
                                    onClick={() => setSelectedExample(examples[index])}
                                    selected={index === examples.indexOf(selectedExample)}
                                    key={index}
                                > {data.name} </Button>
                            )
                        })}
                    </ConfirmToast>
                </div>
            </Section>

            <Section flexRow>
                <div className='change-container' >
                    <h2>Change position</h2>
                    <div className='change-container_buttons'>
                        {options.position.map((data) => {
                            return (
                                <Button
                                    key={data}
                                    name='position'
                                    onClick={(e) => customProps(e)}
                                    selected={data === selectedExample.position}
                                    value={data}
                                >
                                    {data}
                                </Button>
                            )
                        })}
                    </div>
                </div>

                <div className='change-container'>
                    <h2>Change theme</h2>
                    <div className='change-container_buttons'>
                        {options.theme.map((data) => {
                            return (
                                <Button
                                    key={data}
                                    name='theme'
                                    onClick={(e) => customProps(e)}
                                    selected={data === selectedExample.theme}
                                    value={data}
                                >
                                    {data}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </Section>

            <Section>
                <div className='version-container'>
                    <p>Version {package_json.dependencies['react-confirm-toast'].replace('^', '')}</p>
                    <a target='_blank' href='https://github.com/fentosv/react-confirm-toast' rel='noopener noreferrer'>
                        <GitHub />
                    </a>
                </div>
            </Section>
        </Layout >
    )
}

export default Database
