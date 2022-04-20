import images from 'assets/images'
import React from 'react'
import './Header.scss'

interface HeaderPropss {
  label?: string
  onCloseClick?: (e: any) => void
  onBackClick?: (e: any) => void
  onHistoryClick?: (e: any) => void
  onShareClick?: (e: any) => void
  onCartClick?: (e: any) => void
  onSearchClick?: (e: any) => void
  onFilterClick?: (e: any) => void
  onSecondarySearchClick?: (e: any) => void
  hasInbox?: boolean
}

export const Header: React.FC<HeaderPropss> = ({
  label,
  onCloseClick,
  onBackClick,
  onHistoryClick,
  onShareClick,
  onCartClick,
  onSearchClick,
  onFilterClick,
  onSecondarySearchClick,
  hasInbox,
}) => {
  return (
    <div className='component__header h-[60px] max-h-[60px] bg-white max-w-content fixed top-0 w-full flex flex-col justify-center z-50 px-4 py-2 -ml-4'>
      <div className='safe-top flex items-center justify-between'>
        {onBackClick && (
          <img
            className='w-6 h-6 mr-6'
            src={images.ic_arrow_back}
            alt=''
            onClick={onBackClick}
          />
        )}

        {onCloseClick && (
          <img
            className='w-6 h-6 mr-6'
            src={images.ic_close}
            alt=''
            onClick={onCloseClick}
          />
        )}

        {label && (
          <div className='flex-1 truncate font-semi-bold pr-3'>{label}</div>
        )}

        {onSearchClick && (
          <div
            className='overflow-hidden flex items-center flex-1 bg-neutral-10 rounded-md text-sm py-1 pr-2 -ml-2 mr-1'
            onClick={onSearchClick}
          >
            <img className='w-6 h-6 mx-2' src={images.ic_search} alt='' />
            <img
              className='w-auto h-4 mx-2 -mt-1.5'
              src={images.ic_logo_black}
              alt=''
            />
            {'Store'}
          </div>
        )}

        <div className='flex items-center relative'>
          {onHistoryClick && (
            <img
              className='w-6 h-6 ml-3'
              src={images.ic_history_active}
              alt=''
              onClick={onHistoryClick}
            />
          )}
          {onShareClick && (
            <img
              className='w-6 h-6 ml-3'
              src={images.ic_share}
              alt=''
              onClick={onShareClick}
            />
          )}
          {onSecondarySearchClick && (
            <img
              className='w-6 h-6 ml-3'
              src={images.ic_search}
              alt=''
              onClick={onShareClick}
            />
          )}
          {onCartClick && (
            <>
              {hasInbox && (
                <div
                  className='badge-notification'
                  style={{ top: 2, right: 0 }}
                />
              )}
              <img
                className='w-6 h-6 ml-3'
                src={images.ic_cart}
                alt=''
                onClick={onCartClick}
              />
            </>
          )}
          {onFilterClick && (
            <div
              className='flex items-center font-semi-bold text-primary-darker text-sm'
              onClick={onFilterClick}
            >
              <img
                className='w-6 h-6 ml-3 mr-2'
                src={images.ic_filter}
                alt=''
              />
              {'FILTER'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
