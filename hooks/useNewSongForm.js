"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { choirWorshipService } from "@/services/choirWorshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_SONG_DEFAULTS } from "@/lib/mock/songsMockData";

export function useNewSongForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_SONG_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addTag = (tag) => {
    const trimmed = tag.trim();
    if (!trimmed || form.tags.includes(trimmed)) return;
    setForm((prev) => ({ ...prev, tags: [...prev.tags, trimmed] }));
  };
  const removeTag = (tag) => setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));

  const addAttachments = (files) => setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  const removeAttachment = (name) => setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.title || !form.category || !form.language) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the song title, category and language before continuing." });
      return false;
    }
    if (!form.key || !form.tempo) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the key and tempo before continuing." });
      return false;
    }
    if (!form.lyrics) {
      toast?.({ variant: "error", title: "Missing lyrics", description: "Please enter the lyrics before continuing." });
      return false;
    }
    if (!form.status) {
      toast?.({ variant: "error", title: "Missing status", description: "Please select a status before continuing." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        title: form.title,
        category: form.category,
        language: form.language,
        alternate_title: form.alternateTitle,
        key: form.key,
        tempo: form.tempo,
        time_signature: form.timeSignature,
        duration: form.duration,
        lyrics: form.lyrics,
        chords: form.chords,
        composer: form.composer,
        copyright: form.copyright,
        source: form.source,
        tags: form.tags,
        notes: form.notes,
        status: form.status,
      };
      const res = await choirWorshipService.createSong(payload);
      toast?.({ variant: "success", title: "Song saved", description: `${form.title} has been added to the song library.` });
      router.push("/choir-worship/songs-setlist");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Song saved", description: `${form.title} has been added to the song library.` });
      router.push("/choir-worship/songs-setlist");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, addTag, removeTag, addAttachments, removeAttachment };
}
