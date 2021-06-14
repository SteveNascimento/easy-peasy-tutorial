import { useStoreState } from 'easy-peasy'
import React from 'react'


export default function AuditLog() {
    const logs = useStoreState(state => state.audit.logs)
    return (
        <pre>
            <code>{logs.join('\n')}</code>
        </pre>
    )
}