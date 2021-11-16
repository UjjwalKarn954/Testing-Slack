"use strict";
// https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html
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
exports.DataAwsSignerSigningJob = exports.DataAwsSignerSigningJobSource = exports.DataAwsSignerSigningJobSourceS3 = exports.DataAwsSignerSigningJobSignedObject = exports.DataAwsSignerSigningJobSignedObjectS3 = exports.DataAwsSignerSigningJobRevocationRecord = void 0;
var cdktf = require("cdktf");
var DataAwsSignerSigningJobRevocationRecord = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningJobRevocationRecord, _super);
    function DataAwsSignerSigningJobRevocationRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSignerSigningJobRevocationRecord.prototype, "reason", {
        // reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJobRevocationRecord.prototype, "revokedAt", {
        // revoked_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJobRevocationRecord.prototype, "revokedBy", {
        // revoked_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_by');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSignerSigningJobRevocationRecord;
}(cdktf.ComplexComputedList));
exports.DataAwsSignerSigningJobRevocationRecord = DataAwsSignerSigningJobRevocationRecord;
var DataAwsSignerSigningJobSignedObjectS3 = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningJobSignedObjectS3, _super);
    function DataAwsSignerSigningJobSignedObjectS3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSignerSigningJobSignedObjectS3.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJobSignedObjectS3.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSignerSigningJobSignedObjectS3;
}(cdktf.ComplexComputedList));
exports.DataAwsSignerSigningJobSignedObjectS3 = DataAwsSignerSigningJobSignedObjectS3;
var DataAwsSignerSigningJobSignedObject = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningJobSignedObject, _super);
    function DataAwsSignerSigningJobSignedObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSignerSigningJobSignedObject.prototype, "s3", {
        // s3 - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('s3');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSignerSigningJobSignedObject;
}(cdktf.ComplexComputedList));
exports.DataAwsSignerSigningJobSignedObject = DataAwsSignerSigningJobSignedObject;
var DataAwsSignerSigningJobSourceS3 = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningJobSourceS3, _super);
    function DataAwsSignerSigningJobSourceS3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSignerSigningJobSourceS3.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJobSourceS3.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJobSourceS3.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSignerSigningJobSourceS3;
}(cdktf.ComplexComputedList));
exports.DataAwsSignerSigningJobSourceS3 = DataAwsSignerSigningJobSourceS3;
var DataAwsSignerSigningJobSource = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningJobSource, _super);
    function DataAwsSignerSigningJobSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSignerSigningJobSource.prototype, "s3", {
        // s3 - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('s3');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSignerSigningJobSource;
}(cdktf.ComplexComputedList));
exports.DataAwsSignerSigningJobSource = DataAwsSignerSigningJobSource;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job}
*/
var DataAwsSignerSigningJob = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningJob, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSignerSigningJobConfig
    */
    function DataAwsSignerSigningJob(scope, id, config) {
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
        _this._jobId = config.jobId;
        return _this;
    }
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "completedAt", {
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
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "jobId", {
        get: function () {
            return this.getStringAttribute('job_id');
        },
        set: function (value) {
            this._jobId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "jobIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jobId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "jobInvoker", {
        // job_invoker - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_invoker');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "jobOwner", {
        // job_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "platformDisplayName", {
        // platform_display_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_display_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "platformId", {
        // platform_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "profileName", {
        // profile_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "profileVersion", {
        // profile_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "requestedBy", {
        // requested_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('requested_by');
        },
        enumerable: false,
        configurable: true
    });
    // revocation_record - computed: true, optional: false, required: false
    DataAwsSignerSigningJob.prototype.revocationRecord = function (index) {
        return new DataAwsSignerSigningJobRevocationRecord(this, 'revocation_record', index);
    };
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "signatureExpiresAt", {
        // signature_expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature_expires_at');
        },
        enumerable: false,
        configurable: true
    });
    // signed_object - computed: true, optional: false, required: false
    DataAwsSignerSigningJob.prototype.signedObject = function (index) {
        return new DataAwsSignerSigningJobSignedObject(this, 'signed_object', index);
    };
    // source - computed: true, optional: false, required: false
    DataAwsSignerSigningJob.prototype.source = function (index) {
        return new DataAwsSignerSigningJobSource(this, 'source', index);
    };
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningJob.prototype, "statusReason", {
        // status_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_reason');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSignerSigningJob.prototype.synthesizeAttributes = function () {
        return {
            job_id: cdktf.stringToTerraform(this._jobId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSignerSigningJob.tfResourceType = "aws_signer_signing_job";
    return DataAwsSignerSigningJob;
}(cdktf.TerraformDataSource));
exports.DataAwsSignerSigningJob = DataAwsSignerSigningJob;
