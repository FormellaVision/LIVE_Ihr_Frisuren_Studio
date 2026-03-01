'use client';

import { useEffect, useState } from 'react';
import { useConsent } from '@/hooks/useConsent';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface CookieSettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CookieSettings({ open, onOpenChange }: CookieSettingsProps) {
  const { consent, updateConsent, acceptAll } = useConsent();
  const [localSettings, setLocalSettings] = useState(consent);

  useEffect(() => {
    setLocalSettings(consent);
  }, [consent]);

  const handleSave = () => {
    if (localSettings) {
      updateConsent(localSettings);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">
            Cookie-Einstellungen
          </DialogTitle>
          <DialogDescription>
            Passen Sie Ihre Datenschutzeinstellungen an. Technisch notwendige
            Cookies können nicht deaktiviert werden.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="essential"
                  className="text-sm font-semibold text-gray-900 cursor-pointer"
                >
                  Technisch notwendige Cookies
                </Label>
                <p className="text-xs text-gray-600 mt-1">
                  Erforderlich für die grundlegende Funktionalität der Website.
                </p>
              </div>
              <Switch
                id="essential"
                checked={true}
                disabled
                aria-label="Technisch notwendige Cookies - immer aktiv"
              />
            </div>
            <Separator className="bg-gray-100" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="analytics"
                  className="text-sm font-semibold text-gray-900 cursor-pointer"
                >
                  Analytics
                </Label>
                <p className="text-xs text-gray-600 mt-1">
                  Google Analytics zur Analyse und Verbesserung der Website-Performance.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={localSettings?.analytics || false}
                onCheckedChange={(checked) =>
                  setLocalSettings((prev) =>
                    prev ? { ...prev, analytics: checked } : prev
                  )
                }
                aria-label="Analytics Cookies aktivieren"
              />
            </div>
            <Separator className="bg-gray-100" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="marketing"
                  className="text-sm font-semibold text-gray-900 cursor-pointer"
                >
                  Marketing & externe Services
                </Label>
                <p className="text-xs text-gray-600 mt-1">
                  Google Maps und andere externe Dienste für erweiterte Funktionalität.
                </p>
              </div>
              <Switch
                id="marketing"
                checked={localSettings?.marketing || false}
                onCheckedChange={(checked) =>
                  setLocalSettings((prev) =>
                    prev ? { ...prev, marketing: checked } : prev
                  )
                }
                aria-label="Marketing Cookies aktivieren"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-900">
              <strong>Hinweis:</strong> Diese Einstellungen werden für 365 Tage
              gespeichert. Sie können diese jederzeit in der{' '}
              <a href="/datenschutz" className="underline hover:text-blue-700">
                Datenschutzerklärung
              </a>{' '}
              ändern.
            </p>
          </div>
        </div>

        <DialogFooter className="flex gap-2 flex-col sm:flex-row">
          <Button
            onClick={() => {
              acceptAll();
              onOpenChange(false);
            }}
            className="sm:order-last bg-teal-600 hover:bg-teal-700 text-white"
          >
            Alle akzeptieren
          </Button>
          <Button onClick={handleSave} variant="outline">
            Einstellungen speichern
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
