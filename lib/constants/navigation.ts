import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar,
  Settings,
  GraduationCap,
  type LucideIcon
} from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Journal",
    href: "/journal/morning",
    icon: BookOpen
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar
  },
  {
    title: "Learning",
    href: "/learning",
    icon: GraduationCap
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings
  }
];