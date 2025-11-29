export default function TermsPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto" style={{ fontFamily: "Montserrat" }}>
      
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      {/* SECTION WRAPPER FOR CONSISTENT SPACING */}
      <div className="space-y-6 text-[15px] leading-relaxed">

        {/* 1 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Digital Signature & Legal Acceptance</h2>
          <p>
            By digitally signing, clicking “I agree,” or otherwise accepting the Proposal, you:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Agree to be legally bound by this Agreement;</li>
            <li>Accept that your digital acceptance has the same effect as a handwritten signature;</li>
            <li>Confirm you are authorized to enroll the student and assume financial responsibility.</li>
          </ul>
          <p className="mt-2">
            A|P provides educational consulting and coaching. We do not provide legal, medical,
            psychological, therapeutic, tax, or investment services.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Program Calendar, Availability & Closures</h2>
          <p>The primary counseling season runs September–May.</p>
          <p>Summer (June–August) is limited and prioritized for rising seniors.</p>
          <p>Standard hours are Monday–Friday, 1:00–8:00 p.m. PT.</p>
          <p>
            A|P is closed on Thanksgiving (Nov 22–23), Winter Break (Dec 25–Jan 1), and other
            dates announced in advance.
          </p>
          <p>
            A|P may adjust hours, assign alternate instructors, or reschedule sessions for illness,
            emergencies, or operational needs.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Scope of Services</h2>
          <p>The Proposal defines exactly which services are included.</p>
          <p>Services may include:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Academic advising and multi-year course planning</li>
            <li>Testing strategy (SAT/ACT/AP)</li>
            <li>Extracurricular and summer planning</li>
            <li>Development of a Blueprint</li>
            <li>College list and admissions strategy</li>
            <li>Essay brainstorming and editing guidance</li>
            <li>Project mentorship</li>
            <li>Competition mentorship</li>
            <li>Internship and research search guidance</li>
            <li>SAT/AP tutoring (when purchased)</li>
          </ul>
          <p className="mt-2">A|P does not:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Write essays, résumés, or applications</li>
            <li>Submit applications</li>
            <li>Guarantee admissions or placements</li>
            <li>Guarantee grades, scores, awards, or outcomes</li>
            <li>Provide mental health or crisis services</li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Scope Rule: “No More, No Less”</h2>
          <p>
            A|P provides only the services defined in the Proposal and this Agreement. Unused
            items cannot be exchanged unless A|P agrees in writing.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Add-Ons, Bundling & Discounts</h2>
          <p>All additional services must be purchased separately.</p>
          <p>Bundle discount rules:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Counseling packages are never discounted.</li>
            <li>Discount applies only to add-ons.</li>
            <li>Each category purchased at sign-up earns a 2% discount.</li>
            <li>Max discount: 20%.</li>
            <li>Add-ons purchased later do not qualify.</li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Payment Terms & Installments</h2>
          <p>
            By enrolling, you commit to paying the full program fee, regardless of engagement.
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Programs ≤ $10,000: typically due in full.</li>
            <li>$10,000–$30,000: may permit two installments.</li>
            <li>$30,000+: may permit three installments.</li>
          </ul>
          <p className="mt-2">
            A|P may pause or terminate services for late or declined payments. Unpaid balances
            may be pursued through collections.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Refund & Withdrawal Policy</h2>
          <p>Counseling work is heavily front-loaded.</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Before start: possible refund minus work completed.</li>
            <li>Days 1–30: A|P typically retains 30–40% of the program fee.</li>
            <li>Days 31–60: refunds generally not available.</li>
            <li>After 60 days: non-refundable except where required by law.</li>
          </ul>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">8. Late Start Policy</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Late Fall enrollment (Oct–Dec): Fall Counseling may be waived.</li>
            <li>Late Spring enrollment (March+): entire Counseling portion may be waived.</li>
          </ul>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Scheduling, Rescheduling & No-Shows</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Sessions must be scheduled in advance.</li>
            <li>Rescheduling requires 24 hours' notice.</li>
            <li>No-shows may count as used sessions.</li>
            <li>If A|P cancels, the session is rescheduled at no cost.</li>
          </ul>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">10. Conduct & Professional Boundaries</h2>
          <p>
            Respectful behavior is required. A|P may suspend or terminate services for misconduct.
          </p>
        </section>
{/* 11 */}
<section>
  <h2 className="text-xl font-semibold mb-2">11. Responsibilities of Student and Parent/Guardian</h2>
  
  <p className="font-medium mt-2">Student Responsibilities:</p>
  <ul className="list-disc ml-6 mt-2 space-y-1">
    <li>Attend sessions on time and prepared;</li>
    <li>Complete assigned tasks (essays, forms, outreach, research, practice, etc.);</li>
    <li>Provide accurate and complete information about grades, scores, and activities;</li>
    <li>Follow all academic integrity rules and submit their own work.</li>
  </ul>

  <p className="font-medium mt-4">Parent/Guardian Responsibilities:</p>
  <ul className="list-disc ml-6 mt-2 space-y-1">
    <li>Review this Agreement and the Proposal;</li>
    <li>Ensure timely payment of all fees;</li>
    <li>Support the student in following plans and meeting deadlines;</li>
    <li>Communicate schedule changes or major concerns promptly.</li>
  </ul>

  <p className="mt-2">
    A|P does not submit applications or write essays for the student and is not responsible
    for late or incomplete submissions by the student.
  </p>
</section>

{/* 12 */}
<section>
  <h2 className="text-xl font-semibold mb-2">12. Academic Integrity & No Ghostwriting</h2>
  <p>
    A|P provides brainstorming, coaching, and editing feedback on essays and applications.
    We do not write essays, personal statements, short answers, or academic work for the student.
  </p>
  <p className="mt-2">
    The student must retain ownership of their voice and content.
  </p>
  <p className="mt-2">
    Accusations or concerns about ghostwriting will be addressed by clarifying our role and,
    where necessary, limiting further editing.
  </p>
</section>

{/* 13 */}
<section>
  <h2 className="text-xl font-semibold mb-2">13. No Guarantee of Outcomes</h2>
  <p>
    While A|P will act in good faith and provide experienced guidance, we do not guarantee:
  </p>
  <ul className="list-disc ml-6 mt-2 space-y-1">
    <li>Admission to any specific college or program;</li>
    <li>Acceptance to internships, research programs, or competitions;</li>
    <li>Scholarships, awards, or specific financial aid outcomes;</li>
    <li>Any particular GPA, test score, or improvement.</li>
  </ul>
  <p className="mt-2">
    All admissions and selection decisions are made by independent institutions and are
    outside A|P’s control.
  </p>
</section>

{/* 14 */}
<section>
  <h2 className="text-xl font-semibold mb-2">14. Technology, Platforms & Recording</h2>
  <p>
    Sessions may be conducted via online platforms such as Zoom or Google Meet. A|P is not
    responsible for failures of internet, electricity, or third-party platforms.
  </p>
  <p className="mt-2">
    Students and families may not record sessions (audio, video, screenshots, or screen
    capture) without prior written permission from A|P.
  </p>
  <p className="mt-2">
    If A|P records a session (e.g., for training or quality control), we will inform you.
    Such recordings will be kept confidential within A|P unless required by law.
  </p>
</section>

{/* 15 */}
<section>
  <h2 className="text-xl font-semibold mb-2">15. Intellectual Property</h2>
  <p>
    All A|P materials — including frameworks, curricula, worksheets, practice tests, MetaStudy
    resources, project designs, lesson plans, and any written or visual content — are the
    intellectual property of Ryan Prep, Inc.
  </p>
  <p className="mt-2">
    Clients may use materials only for personal, non-commercial use within the student’s
    household.
  </p>
  <p className="mt-2">
    You agree not to copy, reproduce, distribute, sell, or publicly share A|P materials or
    content without written permission.
  </p>
</section>

{/* 16 */}
<section>
  <h2 className="text-xl font-semibold mb-2">16. Third-Party Instructors & Contractors</h2>
  <p>
    Some services (such as AP Expert tutoring, Ryan & Ryan SAT Crash Course, or specialized
    mentorship) may be delivered by independent contractors or third-party instructors
    working under the A|P umbrella.
  </p>
  <p className="mt-2">
    All billing, scheduling, adjustments, and refunds for these services must go through A|P,
    not directly through the contractor.
  </p>
  <p className="mt-2">
    A|P is not responsible for any personal promises or representations made by contractors
    outside official A|P materials.
  </p>
</section>

{/* 17 */}
<section>
  <h2 className="text-xl font-semibold mb-2">17. Non-Solicitation of Staff & Tutors</h2>
  <p>
    You agree not to hire, solicit, or engage A|P counselors, tutors, mentors, or contractors
    directly for private services outside A|P during the term of this Agreement and for 12
    months after services end, without A|P’s written consent.
  </p>
</section>

{/* 18 */}
<section>
  <h2 className="text-xl font-semibold mb-2">18. Force Majeure</h2>
  <p>
    A|P is not liable for delays or failure to perform due to events beyond our reasonable
    control, including but not limited to natural disasters, pandemics, war, labor disputes,
    government actions, platform outages, or power failures.
  </p>
  <p className="mt-2">
    In such events, A|P will make reasonable efforts to resume or adjust services.
  </p>
</section>

{/* 19 */}
<section>
  <h2 className="text-xl font-semibold mb-2">19. Minors & Legal Authority</h2>
  <p>
    Where the student is a minor, the parent or legal guardian is the contracting party and
    assumes full financial responsibility. The parent/guardian warrants they have legal
    authority to enter into this Agreement on behalf of the student.
  </p>
</section>

{/* 20 */}
<section>
  <h2 className="text-xl font-semibold mb-2">20. Dispute Resolution & Governing Law</h2>
  <p>
    The parties agree to first attempt to resolve disputes in good faith through informal
    discussion.
  </p>
  <p className="mt-2">
    If a dispute cannot be resolved informally, the parties agree to consider mediation in
    California before initiating litigation.
  </p>
  <p className="mt-2">
    Any legal action arising from this Agreement shall be brought in the state or federal
    courts located in California.
  </p>
  <p className="mt-2">
    This Agreement is governed by the laws of the State of California, without regard to
    conflict of law rules.
  </p>
</section>

{/* 21 */}
<section>
  <h2 className="text-xl font-semibold mb-2">21. Duration of Services</h2>
  <p>
    Counseling services generally run from the agreed program start date through May 1 of the
    student’s 12th-grade year. Add-ons (such as projects, competitions, SAT terms, tutoring
    hours, and internship search years) have defined durations as outlined in the Proposal.
  </p>
</section>

{/* 22 */}
<section>
  <h2 className="text-xl font-semibold mb-2">22. Entire Agreement & Modifications</h2>
  <p>
    The Proposal plus this Agreement constitute the entire agreement between you and A|P
    regarding Services for the student.
  </p>
  <p className="mt-2">
    Any modifications must be in writing and agreed by both parties.
  </p>
  <p className="mt-2">
    A|P may update these Terms & Conditions for future clients. Material changes affecting an
    active program will be communicated; continued use of services after notice constitutes
    acceptance of updated terms.
  </p>
</section>

      </div>
    </div>
  );
}