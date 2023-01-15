
import { describe, expect, it } from 'vitest'
import {render, screen} from '@testing-library/react'
import Header from './header'

describe('header', ()=>{
    describe('when initializing',()=>{
        it('should render in the document',()=>{
            render(<Header/>)
            expect(screen.getByTestId('logo')).toBeDefined()
        })
    })
})