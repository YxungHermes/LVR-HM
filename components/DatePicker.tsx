"use client";

import { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  error?: string;
  minDate?: Date;
}

const DatePicker = ({ value, onChange, placeholder = "Select a date", error, minDate }: DatePickerProps) => {
  // Convert string to Date object for react-datepicker
  const selectedDate = value ? new Date(value) : null;

  const handleChange = (date: Date | null) => {
    if (date) {
      // Convert to YYYY-MM-DD format
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      onChange(`${year}-${month}-${day}`);
    } else {
      onChange("");
    }
  };

  // Custom input component
  const CustomInput = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder }, ref) => (
    <div className="relative">
      <input
        ref={ref}
        type="text"
        value={value}
        onClick={onClick}
        readOnly
        placeholder={placeholder}
        className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors cursor-pointer ${
          error ? 'border-red-500' : 'border-coffee/20'
        } ${value ? 'text-ink' : 'text-espresso/40'}`}
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-rose-wax-red"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  ));

  CustomInput.displayName = "CustomInput";

  return (
    <div className="date-picker-wrapper">
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleChange}
        customInput={<CustomInput placeholder={placeholder} />}
        dateFormat="MMMM d, yyyy"
        minDate={minDate || new Date()}
        showPopperArrow={false}
        calendarClassName="custom-calendar"
        popperClassName="custom-popper"
        portalId="root-portal"
      />

      <style jsx global>{`
        .custom-popper {
          z-index: 9999 !important;
        }

        .custom-calendar {
          font-family: ui-sans-serif, system-ui, sans-serif;
          border: 1px solid rgba(160, 113, 95, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 60px rgba(244, 105, 126, 0.08);
          overflow: hidden;
          background: white;
        }

        .react-datepicker__header {
          background: linear-gradient(to bottom, rgba(244, 239, 234, 0.5), white);
          border-bottom: 1px solid rgba(160, 113, 95, 0.15);
          padding-top: 20px;
          border-radius: 0;
        }

        .react-datepicker__current-month {
          font-size: 16px;
          font-weight: 600;
          color: #2E2726;
          margin-bottom: 12px;
        }

        .react-datepicker__day-names {
          margin-top: 12px;
        }

        .react-datepicker__day-name {
          color: rgba(84, 67, 64, 0.6);
          font-size: 13px;
          font-weight: 500;
          width: 40px;
          line-height: 40px;
          margin: 2px;
        }

        .react-datepicker__month {
          margin: 12px;
        }

        .react-datepicker__day {
          width: 40px;
          line-height: 40px;
          margin: 2px;
          color: #2E2726;
          border-radius: 10px;
          transition: all 0.2s ease;
          font-size: 14px;
        }

        .react-datepicker__day:hover {
          background-color: rgba(244, 105, 126, 0.1);
          border-radius: 10px;
          transform: scale(1.05);
        }

        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
          background-color: #F4697E !important;
          color: white !important;
          font-weight: 600;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(244, 105, 126, 0.3);
        }

        .react-datepicker__day--today {
          font-weight: 600;
          color: #F4697E;
          background-color: rgba(244, 105, 126, 0.05);
          border-radius: 10px;
        }

        .react-datepicker__day--disabled {
          color: rgba(84, 67, 64, 0.3);
          cursor: not-allowed;
        }

        .react-datepicker__day--disabled:hover {
          background-color: transparent;
          transform: none;
        }

        .react-datepicker__day--outside-month {
          color: rgba(84, 67, 64, 0.3);
        }

        .react-datepicker__navigation {
          top: 20px;
        }

        .react-datepicker__navigation-icon::before {
          border-color: #F4697E;
          border-width: 2px 2px 0 0;
          height: 9px;
          width: 9px;
        }

        .react-datepicker__navigation:hover .react-datepicker__navigation-icon::before {
          border-color: #E84A60;
        }

        .react-datepicker__navigation--previous {
          left: 20px;
        }

        .react-datepicker__navigation--next {
          right: 20px;
        }

        /* Month/Year dropdowns if enabled */
        .react-datepicker__month-dropdown,
        .react-datepicker__year-dropdown {
          background-color: white;
          border: 1px solid rgba(160, 113, 95, 0.2);
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .react-datepicker__month-option:hover,
        .react-datepicker__year-option:hover {
          background-color: rgba(244, 105, 126, 0.1);
        }

        .react-datepicker__month-option--selected,
        .react-datepicker__year-option--selected {
          background-color: #F4697E;
          color: white;
        }

        /* Animation */
        .custom-calendar {
          animation: slideIn 0.2s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DatePicker;
