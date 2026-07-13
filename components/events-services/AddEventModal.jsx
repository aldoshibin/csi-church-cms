"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { EventDetailsTab } from "./add-event-tabs/EventDetailsTab";
import { ScheduleTab } from "./add-event-tabs/ScheduleTab";
import { LocationTab } from "./add-event-tabs/LocationTab";
import { OrganizersTab } from "./add-event-tabs/OrganizersTab";
import { AdditionalInfoTab } from "./add-event-tabs/AdditionalInfoTab";
import { ADD_EVENT_TABS } from "./add-event-tabs/tabConfig";


export function AddEventModal({ open, onOpenChange }) {
  const [activeTab, setActiveTab] = React.useState(ADD_EVENT_TABS[0].key);

  const activeIndex = ADD_EVENT_TABS.findIndex((tab) => tab.key === activeTab);
  const isLastTab = activeIndex === ADD_EVENT_TABS.length - 1;

  const handleNext = () => {
    if (!isLastTab) setActiveTab(ADD_EVENT_TABS[activeIndex + 1].key);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onOpenChange(false);
    setActiveTab(ADD_EVENT_TABS[0].key);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Event" size="xl">
      <form onSubmit={handleSave}>
        <div className="-mx-6 -mt-5 flex gap-6 overflow-x-auto border-b border-border px-6">
          {ADD_EVENT_TABS.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex shrink-0 items-center gap-2 whitespace-nowrap pb-3 pt-4 text-sm font-medium transition-colors ${
                  isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
                {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
              </button>
            );
          })}
        </div>

        <div className="max-h-[55vh] overflow-y-auto py-5">
          {activeTab === "details" && <EventDetailsTab />}
          {activeTab === "schedule" && <ScheduleTab />}
          {activeTab === "location" && <LocationTab />}
          {activeTab === "organizers" && <OrganizersTab />}
          {activeTab === "additional" && <AdditionalInfoTab />}
        </div>

        <div className="-mx-6 -mb-5 flex justify-end gap-2 border-t border-border px-6 py-4">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          {!isLastTab && (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          )}
          <Button type="submit">Save Event</Button>
        </div>
      </form>
    </Modal>
  );
}
