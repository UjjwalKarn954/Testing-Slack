"use strict";
// https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SignerSigningJob = exports.SignerSigningJobSignedObject = exports.SignerSigningJobSignedObjectS3 = exports.SignerSigningJobRevocationRecord = void 0;
var cdktf = require("cdktf");
var SignerSigningJobRevocationRecord = /** @class */ (function (_super) {
    __extends(SignerSigningJobRevocationRecord, _super);
    function SignerSigningJobRevocationRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SignerSigningJobRevocationRecord.prototype, "reason", {
        // reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJobRevocationRecord.prototype, "revokedAt", {
        // revoked_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJobRevocationRecord.prototype, "revokedBy", {
        // revoked_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_by');
        },
        enumerable: false,
        configurable: true
    });
    return SignerSigningJobRevocationRecord;
}(cdktf.ComplexComputedList));
exports.SignerSigningJobRevocationRecord = SignerSigningJobRevocationRecord;
var SignerSigningJobSignedObjectS3 = /** @class */ (function (_super) {
    __extends(SignerSigningJobSignedObjectS3, _super);
    function SignerSigningJobSignedObjectS3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SignerSigningJobSignedObjectS3.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJobSignedObjectS3.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    return SignerSigningJobSignedObjectS3;
}(cdktf.ComplexComputedList));
exports.SignerSigningJobSignedObjectS3 = SignerSigningJobSignedObjectS3;
var SignerSigningJobSignedObject = /** @class */ (function (_super) {
    __extends(SignerSigningJobSignedObject, _super);
    function SignerSigningJobSignedObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SignerSigningJobSignedObject.prototype, "s3", {
        // s3 - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('s3');
        },
        enumerable: false,
        configurable: true
    });
    return SignerSigningJobSignedObject;
}(cdktf.ComplexComputedList));
exports.SignerSigningJobSignedObject = SignerSigningJobSignedObject;
function signerSigningJobDestinationS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function signerSigningJobDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3: cdktf.listMapper(signerSigningJobDestinationS3ToTerraform)(struct.s3)
    };
}
function signerSigningJobSourceS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function signerSigningJobSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3: cdktf.listMapper(signerSigningJobSourceS3ToTerraform)(struct.s3)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job}
*/
var SignerSigningJob = /** @class */ (function (_super) {
    __extends(SignerSigningJob, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningJobConfig
    */
    function SignerSigningJob(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_signer_signing_job',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._ignoreSigningJobFailure = config.ignoreSigningJobFailure;
        _this._profileName = config.profileName;
        _this._destination = config.destination;
        _this._source = config.source;
        return _this;
    }
    Object.defineProperty(SignerSigningJob.prototype, "completedAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // completed_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('completed_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "ignoreSigningJobFailure", {
        get: function () {
            return this.getBooleanAttribute('ignore_signing_job_failure');
        },
        set: function (value) {
            this._ignoreSigningJobFailure = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningJob.prototype.resetIgnoreSigningJobFailure = function () {
        this._ignoreSigningJobFailure = undefined;
    };
    Object.defineProperty(SignerSigningJob.prototype, "ignoreSigningJobFailureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreSigningJobFailure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "jobId", {
        // job_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "jobInvoker", {
        // job_invoker - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_invoker');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "jobOwner", {
        // job_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "platformDisplayName", {
        // platform_display_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_display_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "platformId", {
        // platform_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "profileName", {
        get: function () {
            return this.getStringAttribute('profile_name');
        },
        set: function (value) {
            this._profileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "profileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "profileVersion", {
        // profile_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "requestedBy", {
        // requested_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('requested_by');
        },
        enumerable: false,
        configurable: true
    });
    // revocation_record - computed: true, optional: false, required: false
    SignerSigningJob.prototype.revocationRecord = function (index) {
        return new SignerSigningJobRevocationRecord(this, 'revocation_record', index);
    };
    Object.defineProperty(SignerSigningJob.prototype, "signatureExpiresAt", {
        // signature_expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature_expires_at');
        },
        enumerable: false,
        configurable: true
    });
    // signed_object - computed: true, optional: false, required: false
    SignerSigningJob.prototype.signedObject = function (index) {
        return new SignerSigningJobSignedObject(this, 'signed_object', index);
    };
    Object.defineProperty(SignerSigningJob.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "statusReason", {
        // status_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "destination", {
        get: function () {
            return this.interpolationForAttribute('destination');
        },
        set: function (value) {
            this._destination = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "destinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "source", {
        get: function () {
            return this.interpolationForAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningJob.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SignerSigningJob.prototype.synthesizeAttributes = function () {
        return {
            ignore_signing_job_failure: cdktf.booleanToTerraform(this._ignoreSigningJobFailure),
            profile_name: cdktf.stringToTerraform(this._profileName),
            destination: cdktf.listMapper(signerSigningJobDestinationToTerraform)(this._destination),
            source: cdktf.listMapper(signerSigningJobSourceToTerraform)(this._source)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SignerSigningJob.tfResourceType = "aws_signer_signing_job";
    return SignerSigningJob;
}(cdktf.TerraformResource));
exports.SignerSigningJob = SignerSigningJob;
