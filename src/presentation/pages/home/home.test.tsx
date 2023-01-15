
import { describe, expect, it } from 'vitest'
import Home from './home'
import {render, screen} from '@testing-library/react'

describe('home', ()=>{
    describe('when initializing',()=>{
        it('should render', ()=>{
            render(<Home  />)
            expect(screen.getByTestId('home')).toBeDefined()
            expect(screen.getByTestId('home')).toHaveClass('home')
        })
    })
})