<?php

/* ========================================
   Contact Form API
======================================== */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');


/* ========================================
   JSON Response Helper
======================================== */

function sendJsonResponse(
    bool $success,
    string $message,
    int $statusCode = 200
): void {
    http_response_code($statusCode);

    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);

    exit;
}


/* ========================================
   Request Method
======================================== */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');

    sendJsonResponse(
        false,
        'Method not allowed.',
        405
    );
}


/* ========================================
   Request Body
======================================== */

$rawInput = file_get_contents('php://input');

if ($rawInput === false || $rawInput === '') {
    sendJsonResponse(
        false,
        'Invalid request.',
        400
    );
}

$data = json_decode(
    $rawInput,
    true
);

if (
    !is_array($data) ||
    json_last_error() !== JSON_ERROR_NONE
) {
    sendJsonResponse(
        false,
        'Invalid request.',
        400
    );
}


/* ========================================
   Form Fields
======================================== */

$name = trim(
    (string) ($data['name'] ?? '')
);

$email = trim(
    (string) ($data['email'] ?? '')
);

$phone = trim(
    (string) ($data['phone'] ?? '')
);

$message = trim(
    (string) ($data['message'] ?? '')
);

$website = trim(
    (string) ($data['website'] ?? '')
);


/* ========================================
   Honeypot Spam Protection
======================================== */

if ($website !== '') {
    /*
     * Return success so automated bots do not
     * learn that the honeypot blocked them.
     */
    sendJsonResponse(
        true,
        'Your message was sent successfully.'
    );
}


/* ========================================
   Required Fields
======================================== */

if (
    $name === '' ||
    $email === '' ||
    $message === ''
) {
    sendJsonResponse(
        false,
        'Please complete all required fields.',
        400
    );
}


/* ========================================
   Field Length Validation
======================================== */

if (
    strlen($name) > 100 ||
    strlen($email) > 150 ||
    strlen($phone) > 30 ||
    strlen($message) > 5000
) {
    sendJsonResponse(
        false,
        'One or more fields are too long.',
        400
    );
}


/* ========================================
   Header Injection Protection
======================================== */

/*
 * Name and email are used in email headers.
 * Reject carriage returns and newlines so submitted
 * values cannot create additional mail headers.
 */
if (
    preg_match('/[\r\n]/', $name) ||
    preg_match('/[\r\n]/', $email)
) {
    sendJsonResponse(
        false,
        'Invalid form submission.',
        400
    );
}


/* ========================================
   Email Validation
======================================== */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonResponse(
        false,
        'Please enter a valid email address.',
        400
    );
}


/* ========================================
   Phone Validation
======================================== */

if ($phone !== '') {
    $phoneDigits =
        preg_replace(
            '/\D/',
            '',
            $phone
        );

    if (
        $phoneDigits === null ||
        strlen($phoneDigits) !== 10
    ) {
        sendJsonResponse(
            false,
            'Please enter a valid 10-digit phone number.',
            400
        );
    }
}


/* ========================================
   Email Configuration
======================================== */

/*
 * Destination for portfolio contact submissions.
 *
 * If you want all portfolio messages delivered
 * directly to your domain mailbox, use:
 *
 * $to = 'contact@jennifercurtis.me';
 */
$to = 'contact@jennifercurtis.me';

/*
 * Always send FROM an address on your own domain.
 * Do not use the visitor's submitted email as From.
 */
$from = 'contact@jennifercurtis.me';


/* ========================================
   Email Subject
======================================== */

$subject = 'Portfolio Contact Form - ' . $name;


/* ========================================
   Email Body
======================================== */

$body = "New portfolio contact form submission\n\n";

$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";

if ($phone !== '') {
    $body .= "Phone: {$phone}\n";
}

$body .= "\nMessage:\n";
$body .= "{$message}\n";


/* ========================================
   Email Headers
======================================== */

$headers = [
    'From: Jennifer Curtis Portfolio <' . $from . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8'
];


/* ========================================
   Send Email
======================================== */

$sent = mail(
    $to,
    $subject,
    $body,
    implode("\r\n", $headers)
);


/* ========================================
   Email Result
======================================== */

if (!$sent) {
    /*
     * Do not expose PHP/server details to the visitor.
     * Log detailed server errors separately if needed.
     */
    sendJsonResponse(
        false,
        'Your message could not be sent. Please try again later.',
        500
    );
}

sendJsonResponse(
    true,
    'Your message was sent successfully.'
);