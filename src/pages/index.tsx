import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import Layout from '@components/Layout';
import Button from '@components/Button';
import Section from '@components/Section';
import Code from '@components/Code';
import ConfirmToast from '@components/ConfirmToast';

// import { ConfirmToast } from 'react-confirm-toast'


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
        name: "Example 1",
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
        showCloseIcon: false,
        customCancel: 'Cancel',
        customConfirm: 'Confirm',
        message: 'Do you want to continue and execute the function?',
        position: 'top-left' as const,
        theme: 'dark' as const
    },
    {
        name: 'Example 3',
        asModal: false,
        showCloseIcon: false,
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
            </Head>

            <Section width='full' background='black'
            >
                <div className="title-container">

                    <h1>react-confirm-toast</h1>
                    <h3>Easy and light toast for confirming functions</h3>
                </div>
            </Section>

            <Section>
                <h1>Examples</h1>

                <div className='example-container'>

                    <div className="code">
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
        </Layout >
    )
}

export default Database
