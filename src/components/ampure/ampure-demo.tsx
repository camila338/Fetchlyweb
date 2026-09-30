"use client";

import {
  BadgeCheckIcon,
  BatteryFullIcon,
  BatteryIcon,
  CalendarIcon,
  DropletIcon,
  EllipsisIcon,
  ExternalLinkIcon,
  FileChartColumnIcon,
  HouseIcon,
  LoaderCircleIcon,
  RefreshCwIcon,
  RouterIcon,
  Settings2Icon,
  SmartphoneChargingIcon,
  ThermometerIcon,
  UnplugIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import * as React from "react";

import { barlow } from "./ampure-font";

import "./ampure-demo.css";

const SCREEN_W = 412;

/** Camera stops, in phone pixels from the top of the screen. */
const CAM_HERO = 0;
const CAM_ACTION = 204;
const CAM_SHEET = 467;

type Stage = "offer" | "installing";

type Tap = "update" | "install" | null;

type DemoState = {
  entered: boolean;
  sheet: boolean;
  stage: Stage;
  /** Held for the length of the button's pressed state. */
  press: Tap;
  /** Held for the length of the touch ripple, which outlives the press. */
  ripple: Tap;
  cam: number;
  progress: number;
};

const START: DemoState = {
  entered: false,
  sheet: false,
  stage: "offer",
  press: null,
  ripple: null,
  cam: CAM_HERO,
  progress: 0,
};

/**
 * Overview → Update Firmware → Download & Install → Installing, on a loop.
 * Offsets are milliseconds from the top of the cycle.
 */
const TIMELINE: { at: number; set: Partial<DemoState> }[] = [
  { at: 60, set: { entered: true } },
  { at: 1450, set: { cam: CAM_ACTION } },
  { at: 2300, set: { press: "update", ripple: "update" } },
  { at: 2560, set: { press: null } },
  { at: 2740, set: { sheet: true, stage: "offer", cam: CAM_SHEET } },
  { at: 3000, set: { ripple: null } },
  { at: 4600, set: { press: "install", ripple: "install" } },
  { at: 4850, set: { press: null } },
  { at: 4920, set: { stage: "installing", progress: 0 } },
  { at: 5120, set: { progress: 20 } },
  { at: 5300, set: { ripple: null } },
  { at: 5800, set: { progress: 40 } },
  { at: 6480, set: { progress: 60 } },
  { at: 7160, set: { progress: 80 } },
  { at: 7840, set: { progress: 100 } },
  { at: 9400, set: { sheet: false } },
  { at: 10100, set: { entered: false } },
  // Camera and drawer snap back only once the screen has faded out, so the
  // loop reads as one continuous take rather than a rewind.
  { at: 10700, set: { cam: CAM_HERO, stage: "offer", progress: 0 } },
];

const CYCLE = 11000;

const METRICS: {
  Icon: typeof BatteryFullIcon;
  label: string;
  value: string;
  tone?: "warning" | "danger";
}[] = [
  {
    Icon: BatteryFullIcon,
    label: "Battery SOC",
    value: "34%",
    tone: "warning",
  },
  { Icon: ThermometerIcon, label: "Temperature", value: "28°C" },
  { Icon: DropletIcon, label: "Water Level", value: "Low", tone: "danger" },
  { Icon: ZapIcon, label: "Voltage", value: "12.6V" },
  { Icon: CalendarIcon, label: "Last EQ CYCLE", value: "2023-05-15" },
  {
    Icon: SmartphoneChargingIcon,
    label: "Charge Status",
    value: "Charging - 20A",
  },
];

function StatusBar() {
  return (
    <div className="amp-statusbar">
      <span className="amp-clock">12:30</span>
      <div className="amp-sysicons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
          <path
            d="M2.11719 7.5C2.70196 7.5 3.17676 8.00368 3.17676 8.625V10.875C3.17676 11.4963 2.70196 12 2.11719 12H1.05859C0.473928 11.9999 0 11.4962 0 10.875V8.625C0 8.00376 0.473927 7.50013 1.05859 7.5H2.11719ZM7.05859 5.25C7.64337 5.25 8.11719 5.75368 8.11719 6.375V10.875C8.11719 11.4963 7.64337 12 7.05859 12H6C5.41524 12 4.94141 11.4963 4.94141 10.875V6.375C4.94141 5.75369 5.41524 5.25001 6 5.25H7.05859ZM12 2.625C12.5848 2.62501 13.0586 3.12869 13.0586 3.75V10.875C13.0586 11.4963 12.5848 12 12 12H10.9414C10.3566 12 9.88281 11.4963 9.88281 10.875V3.75C9.88281 3.12868 10.3566 2.625 10.9414 2.625H12ZM16.9414 0C17.5261 0.000132092 18 0.503761 18 1.125V10.875C18 11.4962 17.5261 11.9999 16.9414 12H15.8828C15.298 12 14.8232 11.4963 14.8232 10.875V1.125C14.8232 0.50368 15.298 0 15.8828 0H16.9414Z"
            fill="#020617"
          />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
          <path
            d="M5.68555 9.19241C7.02184 8.012 8.97917 8.01196 10.3154 9.19241C10.3826 9.25588 10.4219 9.34586 10.4238 9.44046C10.4257 9.53513 10.3899 9.62707 10.3252 9.69339L8.23243 11.8985C8.17109 11.9633 8.08727 12 8.00001 12C7.91292 11.9999 7.8298 11.9632 7.76856 11.8985L5.67579 9.69339C5.61114 9.62702 5.57524 9.53513 5.57715 9.44046C5.5791 9.34583 5.6183 9.25585 5.68555 9.19241ZM2.89356 6.25003C5.7727 3.45274 10.2313 3.45258 13.1104 6.25003C13.1753 6.31558 13.2119 6.40573 13.2129 6.50003C13.2138 6.59427 13.1787 6.68505 13.1152 6.75198L11.9053 8.02933C11.7806 8.15958 11.579 8.16207 11.4512 8.03519C10.5057 7.141 9.27542 6.64546 8.00001 6.64554C6.72551 6.6462 5.4965 7.14158 4.55176 8.03519C4.42389 8.1621 4.22232 8.1597 4.09766 8.02933L2.88868 6.75198C2.82497 6.68513 2.78919 6.59437 2.79005 6.50003C2.79096 6.40569 2.82858 6.31557 2.89356 6.25003ZM0.100592 3.31546C4.51651 -1.10515 11.4835 -1.10515 15.8994 3.31546C15.9633 3.38113 15.9995 3.47085 16 3.56448C16.0005 3.65805 15.9654 3.74807 15.9024 3.81448L14.6914 5.09085C14.5667 5.22185 14.364 5.22369 14.2373 5.09476C12.5549 3.42393 10.3215 2.49233 8.00001 2.49222C5.67847 2.49233 3.44527 3.42393 1.7627 5.09476C1.63608 5.2238 1.43423 5.222 1.30958 5.09085L0.0976625 3.81448C0.0345899 3.74803 -0.000540904 3.65806 6.29792e-06 3.56448C0.000595791 3.47089 0.0366975 3.38108 0.100592 3.31546Z"
            fill="#020617"
          />
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden>
          <path
            opacity="0.4"
            d="M19.3096 0.0136719C20.6541 0.150332 21.7031 1.28635 21.7031 2.66699V9.33301C21.7031 10.7136 20.6541 11.8497 19.3096 11.9863L19.0371 12H2.66699L2.39355 11.9863C1.04909 11.8496 0 10.7136 0 9.33301V2.66699C0 1.28643 1.04909 0.150438 2.39355 0.0136719L2.66699 0H19.0371L19.3096 0.0136719ZM2.66699 1C1.74652 1 1 1.74652 1 2.66699V9.33301C1 10.2535 1.74652 11 2.66699 11H19.0371C19.9574 10.9998 20.7031 10.2533 20.7031 9.33301V2.66699C20.7031 1.74666 19.9574 1.00023 19.0371 1H2.66699ZM22.6895 3.88281C23.4833 4.24152 24 5.07551 24 6C24 6.92449 23.4833 7.75848 22.6895 8.11719V3.88281Z"
            fill="#020617"
          />
          <rect
            x="1.97303"
            y="2.11765"
            width="17.7573"
            height="7.76471"
            rx="1.33333"
            fill="#020617"
          />
        </svg>
      </div>
    </div>
  );
}

function SystemNav() {
  return (
    <div className="amp-sysnav">
      <svg
        className="amp-sysnav-back"
        width="12"
        height="14"
        viewBox="0 0 11.9621 13.9975"
        fill="none"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4463 0.144815C11.1128 -0.25642 11.9621 0.223596 11.9621 1.00155V12.996C11.9621 13.7739 11.1128 14.254 10.4463 13.8527L0.484243 7.8555C-0.161414 7.46681 -0.161414 6.53072 0.484242 6.14203L10.4463 0.144815Z"
          fill="#64748B"
        />
      </svg>
      <svg
        className="amp-sysnav-home"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2Z"
          fill="#64748B"
        />
      </svg>
      <span className="amp-sysnav-recents" />
    </div>
  );
}

/**
 * The Ampure PosiCharge BMID app, replayed inside the case-study card: the
 * Overview screen rises into place, a simulated tap on "Update Firmware" opens
 * the release drawer, and "Download & Install" turns it into a live install.
 * Runs only while on screen, and holds still under reduced motion.
 */
export function AmpureDemo({
  freeze,
}: {
  /** Hold one step of the flow instead of looping. Also the reduced-motion view. */
  freeze?: "overview" | Stage;
}) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<DemoState>(START);

  // Fit the 412x887 device into whatever box the card gives us.
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const fit = () => {
      // clientWidth/Height, not getBoundingClientRect: the card's reveal
      // animation scales an ancestor, and that would skew the measurement.
      const width = root.clientWidth;
      const height = root.clientHeight;
      if (!width || !height) return;
      // Fill the card's full width rather than shrinking to fit its height too
      // — the device is nearly square and the card is landscape, so fitting
      // both axes left the phone a narrow, illegible sliver. Filling the
      // width instead makes the frame the dominant element; anchoring it to
      // the top with a fixed gap (see .amp in the stylesheet) crops any extra
      // height off the bottom instead of touching the card's top edge.
      const scale = width / SCREEN_W;
      root.style.setProperty("--amp-s", String(scale));
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const held = freeze ?? "";
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (held || reduced) {
      const step = held || "overview";
      setState({
        ...START,
        entered: true,
        sheet: step !== "overview",
        stage: step === "installing" ? "installing" : "offer",
        cam: step === "overview" ? CAM_HERO : CAM_SHEET,
        progress: step === "installing" ? 60 : 0,
      });
      return;
    }

    let timers: ReturnType<typeof setTimeout>[] = [];

    const stop = () => {
      timers.forEach(clearTimeout);
      timers = [];
    };

    const run = () => {
      setState(START);
      timers = TIMELINE.map(({ at, set }) =>
        setTimeout(() => setState((prev) => ({ ...prev, ...set })), at),
      );
      timers.push(setTimeout(run, CYCLE));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stop();
          run();
        } else {
          stop();
          setState(START);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [freeze]);

  const installing = state.stage === "installing";

  return (
    <div
      ref={rootRef}
      className={`amp ${barlow.variable}`}
      data-entered={state.entered}
      data-sheet={state.sheet}
      data-stage={state.stage}
      style={{ "--amp-cam": state.cam } as React.CSSProperties}
      // Decorative, like the cover image it stands in for: the card's own
      // heading and summary already name the case study.
      aria-hidden
    >
      <span className="amp-backdrop" />

      <div className="amp-frame">
        <div className="amp-stage">
          <div className="amp-device">
            <StatusBar />

            <div className="amp-hero">
              <span className="amp-hero-art" />
              <div className="amp-hero-inner">
                <div className="amp-hero-block">
                  <p className="amp-sync">Last Sync: 2 minutes ago</p>
                  <div className="amp-statusrow">
                    <span className="amp-badge amp-badge--connected">
                      Connected
                    </span>
                    <span className="amp-disconnect">
                      <UnplugIcon size={16} color="#020617" />
                      Disconnect BMID
                    </span>
                  </div>
                </div>
                <p className="amp-vehicle">VEH9158</p>
                <div className="amp-details">
                  <span className="amp-detail">
                    <RouterIcon size={16} color="#020617" />
                    <span>0102140010</span>
                  </span>
                  <span className="amp-detail">
                    <BatteryIcon size={16} color="#020617" />
                    <span>BAT55543</span>
                  </span>
                  <span className="amp-detail">
                    <BadgeCheckIcon size={16} color="#020617" />
                    <span>&lt;Dealer Name&gt;</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="amp-tabwrap">
              <div className="amp-tabs">
                <span className="amp-tab amp-tab--active">Overview</span>
                <span className="amp-tab">Notifications</span>
              </div>
              <span className="amp-tabbadge amp-badge amp-badge--new">4</span>
            </div>

            <div className="amp-content">
              <div className="amp-overview">
                {METRICS.map(({ Icon, label: name, value, tone }) => (
                  <span className="amp-info" key={name}>
                    <Icon size={24} color="#020617" style={{ flex: "none" }} />
                    <span className="amp-info-text">
                      <span className="amp-info-label">{name}</span>
                      <span
                        className={`amp-info-value${tone ? ` amp-info-value--${tone}` : ""}`}
                      >
                        {value}
                      </span>
                    </span>
                  </span>
                ))}
              </div>

              <div className="amp-actions">
                <div className="amp-action-row">
                  <span className="amp-action">
                    <Settings2Icon size={24} color="#020617" />
                    BMID Configuration
                  </span>
                  <span
                    className="amp-action"
                    data-pressed={state.press === "update"}
                  >
                    <RefreshCwIcon size={24} color="#020617" />
                    Update Firmware
                    <span
                      className="amp-ripple"
                      data-on={state.ripple === "update"}
                    />
                  </span>
                  <span className="amp-dot" />
                </div>
                <div className="amp-action-row">
                  <span className="amp-action">
                    <FileChartColumnIcon size={24} color="#020617" />
                    Generate BMID Report
                  </span>
                  <span className="amp-action">
                    <EllipsisIcon size={24} color="#020617" />
                    More Actions
                  </span>
                </div>
              </div>

              <div className="amp-adwrap">
                <div className="amp-ad">
                  <span className="amp-ad-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/ampure/posilink-ad.png" alt="" />
                  </span>
                  <span className="amp-ad-body">
                    <span className="amp-badge amp-badge--premium">
                      Premium
                    </span>
                    <span className="amp-ad-title">Connect to PosiLink</span>
                    <span className="amp-ad-copy">
                      With PosiLink, Fleet Data is Actionable, Automatic and
                      Accessible.
                    </span>
                  </span>
                  <span className="amp-ad-link">
                    Learn More
                    <ExternalLinkIcon size={16} color="#020617" />
                  </span>
                </div>
              </div>
            </div>

            <div className="amp-nav">
              <span className="amp-nav-item">
                <HouseIcon size={24} color="#0C4884" />
              </span>
              <span className="amp-nav-item amp-nav-item--active">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ampure/nav-forklift.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
              <span className="amp-nav-item">
                <UserIcon size={24} color="#0C4884" />
              </span>
            </div>

            <SystemNav />

            <span className="amp-scrim" />

            <div className="amp-drawer">
              <span className="amp-handle-wrap">
                <span className="amp-handle" />
              </span>

              <div className="amp-drawer-header">
                <p className="amp-drawer-title">BMID Firmware</p>
                <p className="amp-drawer-sub">Current Version: 2.3.1</p>
              </div>

              <div className="amp-drawer-content">
                <div className="amp-release">
                  {installing ? (
                    <span
                      className="amp-badge amp-badge--installing"
                      key="badge-i"
                    >
                      Installing...
                    </span>
                  ) : (
                    <span className="amp-badge amp-badge--new" key="badge-o">
                      New Version!
                    </span>
                  )}
                  <span
                    className="amp-release-text"
                    key={installing ? "text-i" : "text-o"}
                  >
                    <span className="amp-release-title">
                      {installing
                        ? "BMID Firmware - Version 3.2.1"
                        : "BMID Firmware Update Available"}
                    </span>
                    <span className="amp-release-copy">
                      {installing
                        ? "Improved battery monitoring and fault detection."
                        : "Version 3.2.1 is now available with improved battery monitoring and fault detection."}
                    </span>
                  </span>
                  {installing ? (
                    <span className="amp-progress">
                      <span
                        className="amp-progress-fill"
                        style={{ width: `${state.progress}%` }}
                      />
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="amp-drawer-footer">
                <span
                  className="amp-btn amp-btn--primary"
                  data-busy={installing}
                  data-pressed={state.press === "install"}
                >
                  {installing ? (
                    <LoaderCircleIcon
                      className="amp-spinner"
                      size={16}
                      color="#F6FCFF"
                    />
                  ) : null}
                  <span className="amp-btn-wrap">
                    {installing ? "Installing" : "Download & Install"}
                  </span>
                  <span
                    className="amp-ripple amp-ripple--light"
                    data-on={state.ripple === "install"}
                  />
                </span>
                <span className="amp-btn amp-btn--ghost">
                  <span className="amp-btn-wrap">Cancel</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
