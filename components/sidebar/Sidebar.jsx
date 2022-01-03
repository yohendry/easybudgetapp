import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWindowSize, useKey } from 'rooks';
import { signOut } from 'firebase/auth';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import SidebarItem from './SidebarItem';
import SidebarTitle from './SidebarTitle';
import firebase from '../../lib/firebase';
import {
  DashboardIcon, AddNewIcon, ProfileIcon, signOutIcon,
} from './icons';
import { useApp } from '../../contexts/app';

const mdBreakpoint = 768;
export default function SidebarMenu() {
  const router = useRouter();
  const { innerWidth } = useWindowSize();
  const { isSidebarOpen, setIsSidebarOpen } = useApp();
  const { pathname } = router;
  const isSm = innerWidth < mdBreakpoint;
  useKey(['Escape'], () => { setIsSidebarOpen(false); }, {
    when: isSm,
  });
  useEffect(() => {

  }, [innerWidth]);
  const classes = ['flex', 'flex-col', 'sidebar', 'w-64', 'md:w-64', 'md:shadow', 'transform', '', 'transition-transform', 'duration-150', 'ease-in', 'bg-budget-purple-800', 'md:translate-x-0'];

  classes.push(
    isSidebarOpen ? 'translate-x-0 w-full' : '-translate-x-full',
  );

  return (
    <aside
      style={{ minWidth: '300px' }}
      className={classes.join(' ')}
    >
      <div className="flex flex-col sidebar-content px-7 pt-4 pb-4 flex-1">
        <ul className="flex flex-col w-full flex-1 ">
          <SidebarItem svgIcon={DashboardIcon} label="Dashboard" active={['/dashboard', '/app'].includes(pathname)} href="/app" />
          <Accordion allowToggle sx={{ border: 'none', padding: '0' }} mb={4} mt={4}>
            <AccordionItem border="none">
              <AccordionButton sx={{ border: 'none', padding: '0' }}>
                <Box flex="1" textAlign="left">
                  <SidebarTitle title="Budgets" />
                </Box>

                <AccordionIcon color="#fff" mr={2} />
              </AccordionButton>

              <AccordionPanel pb={4} px={2}>
                <div className="flex gap-4 flex-col mt-2">
                  <SidebarItem label="Manage budgets" />
                  <SidebarItem label="Manage budgets" />
                  <SidebarItem label="Manage budgets" />
                </div>

              </AccordionPanel>
              <SidebarItem label="New budget" svgIcon={AddNewIcon} color="budget-green" />
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle sx={{ border: 'none', padding: '0' }}>
            <AccordionItem border="none">
              <AccordionButton sx={{ border: 'none', padding: '0' }}>
                <Box flex="1" textAlign="left">
                  <SidebarTitle title="Accounts" />
                </Box>

                <AccordionIcon color="#fff" mr={2} />
              </AccordionButton>

              <AccordionPanel pb={4} px={2}>
                <div className="flex gap-4 flex-col mt-2">
                  <SidebarItem label="Manage accounts" active={['/app/account/1'].includes(pathname)} href="/app/account/1" />
                  <SidebarItem label="Manage accounts" active={['/app/account/2'].includes(pathname)} href="/app/account/2" />
                </div>

              </AccordionPanel>
              <SidebarItem className="my-4" label="New account" svgIcon={AddNewIcon} color="budget-green" />
            </AccordionItem>
          </Accordion>

          <SidebarTitle title="" />
          <SidebarItem label="Profile" svgIcon={ProfileIcon} />
          {/* <SidebarItem label="Notifications" svgIcon={NotificationsIcon} count="10"/>
            <SidebarItem label="Settings" svgIcon={SettingsIcon}/> */}
          <SidebarItem
            label="Sign Out"
            color="budget-orange"
            svgIcon={signOutIcon}
            onClick={() => {
              signOut(firebase.auth()).then(() => {
                router.push('/sign-in');
              });
            }}
          />
        </ul>
      </div>
      <div className="sidebar-footer pt-4 px-4 pb-6 text-gray-500 text-sm self-end">
        <span style={{ fontFamily: 'monospace' }} className="text-sm md:hidden txt-gray-300">
          press
          {' '}
          <span className="text-gray-200 ">[Esc]</span>
          {' '}
          to close
        </span>
      </div>
    </aside>
  );
}
