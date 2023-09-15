import { useCallback } from 'react'
import { Layout, Switch, Space } from 'antd'
import { SwitchChangeEventHandler } from 'antd/es/switch'
import { SvgIcon } from '@/components'
import { ThemeEnum } from '@/store/themes/types'
import themeSelector from '@/store/themes/selectors'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  const setTheme = themeSelector.use.setTheme()

  const onChangeTheme: SwitchChangeEventHandler = useCallback((isChecked) => {
    const updatedTheme = isChecked ? ThemeEnum.DARK : ThemeEnum.LIGHT

    setTheme(updatedTheme)
  }, [])

  return (
    <Layout.Header className={cx('header')}>
      <SvgIcon name='upstream' className={cx('header__logo')} />
      <Space>
        <span>Dark mode</span>
        <Switch onChange={onChangeTheme} />
      </Space>
    </Layout.Header>
  )
}

export default Header
