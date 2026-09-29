"use client";

import { CircleHelpIcon, MenuIcon, MonitorSmartphoneIcon, PenToolIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { FetchlyLogo } from "@/components/fetchly-logo";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PRIMARY_NAV, SERVICES } from "@/content/site";
import { cn } from "@/lib/utils";

const SERVICE_ICONS = {
  store: StoreIcon,
  "monitor-smartphone": MonitorSmartphoneIcon,
  "pen-tool": PenToolIcon,
} as const;

const navLink =
  "inline-flex h-9 items-center rounded-full px-3 text-body-sm text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground";

const mobileLink =
  "flex items-center rounded-lg px-3 py-2 text-body-md text-foreground transition-colors hover:bg-muted aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground";

/** Adds `data-scrolled` once the page has moved past the header's own height. */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const current = (href: string) =>
    pathname === href ? ("page" as const) : undefined;

  return (
    <div
      data-scrolled={scrolled ? "" : undefined}
      className="group/scroll pointer-events-none sticky top-0 z-50 w-full transition-[padding] md:px-10 md:data-scrolled:py-3 xl:px-page"
    >
      <nav
        aria-label="Primary"
        className="pointer-events-auto mx-auto flex h-16 max-w-site-md items-center justify-between gap-4 border border-transparent px-4 transition-[background-color,border-color,box-shadow] group-data-scrolled/scroll:border-border group-data-scrolled/scroll:bg-background/85 group-data-scrolled/scroll:shadow-lg group-data-scrolled/scroll:backdrop-blur-md motion-reduce:transition-none md:rounded-full md:px-6"
      >
        <Link
          href="/"
          className="shrink-0 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <FetchlyLogo className="h-7 text-foreground md:h-8" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {PRIMARY_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current(item.href)}
                className={navLink}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <NavigationMenu aria-label="Services">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col gap-1">
                      {SERVICES.map((service) => {
                        const Icon = SERVICE_ICONS[service.icon];
                        return (
                          <li key={service.href}>
                            <NavigationMenuLink
                              render={<Link href={service.href} />}
                              className="items-start gap-3 rounded-lg p-3"
                            >
                              <Icon
                                className="mt-0.5 size-5 shrink-0 text-malibu-darker"
                                aria-hidden
                              />
                              <span className="flex flex-col gap-1">
                                <span className="text-body-sm font-medium text-foreground">
                                  {service.title}
                                </span>
                                <span className="text-body-xs text-muted-foreground">
                                  {service.description}
                                </span>
                              </span>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>

              <NavigationMenuPortal>
                <NavigationMenuPositioner>
                  <NavigationMenuPopup>
                    <NavigationMenuViewport />
                  </NavigationMenuPopup>
                </NavigationMenuPositioner>
              </NavigationMenuPortal>
            </NavigationMenu>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-1 md:gap-2">
          <Link
            href="/faq"
            aria-label="FAQ"
            aria-current={current("/faq")}
            className="hidden size-11 items-center justify-center rounded-full text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground md:inline-flex"
          >
            <CircleHelpIcon className="size-5" aria-hidden />
          </Link>

          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary", size: "md" }),
              "hidden group-data-scrolled/scroll:bg-primary group-data-scrolled/scroll:text-primary-foreground group-data-scrolled/scroll:hover:bg-primary/80 motion-reduce:transition-none md:inline-flex",
            )}
          >
            Get in Touch
          </Link>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              aria-label="Open navigation menu"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "md:hidden",
              )}
            >
              <MenuIcon aria-hidden />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Fetchly site navigation</SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile" className="flex flex-col gap-1 px-2 pb-4">
                {PRIMARY_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current(item.href)}
                    className={mobileLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Separator className="my-2" />

                <p className="px-3 pb-1 font-mono text-tagline text-muted-foreground uppercase">
                  Services
                </p>
                {SERVICES.map((service) => {
                  const Icon = SERVICE_ICONS[service.icon];
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      aria-current={current(service.href)}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-start gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted aria-[current=page]:bg-accent"
                    >
                      <Icon
                        className="mt-1 size-5 shrink-0 text-malibu-darker"
                        aria-hidden
                      />
                      <span className="flex flex-col gap-1">
                        <span className="text-body-md text-foreground">
                          {service.title}
                        </span>
                        <span className="text-body-xs text-muted-foreground">
                          {service.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}

                <Separator className="my-2" />

                <Link
                  href="/faq"
                  aria-current={current("/faq")}
                  className={mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "sm" }),
                    "mt-4 h-11 rounded-full",
                  )}
                >
                  Get in Touch
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
