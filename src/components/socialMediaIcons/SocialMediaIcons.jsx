import React from 'react'
import "./SocialMediaIcons.css"
import { socialMediaIcons } from '@/data';
import Link from 'next/link';
export default function SocialMediaIcons({name}) {
  return (
    <div className={`social-media-icons ${name}`}>
    {socialMediaIcons.map((site,index) => {
      return (
        <button
          key={index}
          className={`social-media-icon ${site.name}`}
          style={{ color: site.color }}
        >
          <Link target='_blank' href={`${site.link}`}> {site.icon} </Link>
        </button>
      );
    })}
  </div>
  )
}
