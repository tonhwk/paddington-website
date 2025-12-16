import { useState } from 'react'
import Button from '../Button'
import Icons from '../Icons'

const ContractAddress = ({ address, title = 'Contract Address', className = '' }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className={`contract-address ${className}`}>
      <h3 className="contract-address__title">{title}</h3>
      <div className="contract-address__container">
        <code className="contract-address__code">{address}</code>
        <Button
          variant="primary"
          size="sm"
          onClick={copyToClipboard}
          icon={copied ? <Icons.Check /> : <Icons.Copy />}
          className="contract-address__copy-btn"
        >
          {copied ? 'Copied!' : 'Copy CA'}
        </Button>
      </div>
    </div>
  )
}

export default ContractAddress