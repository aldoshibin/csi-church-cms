"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { cemeteryService } from "@/services/cemeteryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_PLOT_DEFAULTS } from "@/lib/mock/vmCemeteryMockData";

export function useNewPlotForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_PLOT_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    section: form.section,
    row: form.row,
    grave_number: form.graveNumber,
    plot_type: form.plotType,
    length_ft: form.length,
    width_ft: form.width,
    depth_ft: form.depth,
    area_sqft: form.area,
    area_zone: form.areaZone,
    status: form.status,
    availability: form.availability,
    category: form.category,
    maintenance_fee: form.maintenanceFee,
    assigned_to: form.assignedTo,
    remarks: form.remarks,
    block: form.block,
    pathway_access: form.pathwayAccess,
    landmark: form.landmark,
    gps_location: form.gpsLocation,
  });

  const submit = async ({ addAnother = false } = {}) => {
    setIsSubmitting(true);
    try {
      const res = await cemeteryService.createPlot(buildPayload());
      toast?.({ variant: "success", title: "Plot saved", description: `Plot ${form.section ? `in ${form.section}` : ""} has been saved.` });
      if (addAnother) {
        setForm({ ...NEW_PLOT_DEFAULTS });
      } else {
        router.push("/cemetery-management/plots-management");
      }
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Plot saved", description: `Plot ${form.section ? `in ${form.section}` : ""} has been saved.` });
      if (addAnother) {
        setForm({ ...NEW_PLOT_DEFAULTS });
      } else {
        router.push("/cemetery-management/plots-management");
      }
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
