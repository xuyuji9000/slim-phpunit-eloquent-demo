import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { incrementAsync } from './sagas'

describe('incrementAsync saga test', () =>{
    const gen = incrementAsync()

    it('incrementAsync should return a Promise that will resolve after 1 second', () => {
        expect(
            gen.next().value
        ).toEqual(
            call(delay, 1000)
        )
    })

    it('incrementAsync Saga must dispatch an INCREMENT action', () => {
        expect(
            gen.next().value
        ).
        toEqual(
            put({type: 'INCREMENT'})
        )
    })

    it('incrementAsync Saga must be done', () => {
        expect(gen.next()).toEqual({ done: true, value: undefined })
    })
    // assert.deepEqual(
    //     gen.next().value,
    //     call(delay, 1000),
    //     'incrementAsync should return a Promise that will resolve after 1 second'
    // )

    // assert.deepEqual(
    //     gen.next().value,
    //     put({type: 'INCREMENT'}),
    //     'incrementAsync Saga must dispatch an INCREMENT action'
    // )

    // assert.deepEqual(
    //     gen.next(),
    //     { done: true, value: undefined },
    //     'incrementAsync Saga must be done'
    // )

    // assert.end()
})
