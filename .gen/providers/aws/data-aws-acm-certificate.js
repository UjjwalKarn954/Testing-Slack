"use strict";
// https://www.terraform.io/docs/providers/aws/d/acm_certificate.html
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
exports.DataAwsAcmCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html aws_acm_certificate}
*/
var DataAwsAcmCertificate = /** @class */ (function (_super) {
    __extends(DataAwsAcmCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html aws_acm_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAcmCertificateConfig
    */
    function DataAwsAcmCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_acm_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domain = config.domain;
        _this._keyTypes = config.keyTypes;
        _this._mostRecent = config.mostRecent;
        _this._statuses = config.statuses;
        _this._tags = config.tags;
        _this._types = config.types;
        return _this;
    }
    Object.defineProperty(DataAwsAcmCertificate.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "keyTypes", {
        get: function () {
            return this.getListAttribute('key_types');
        },
        set: function (value) {
            this._keyTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAcmCertificate.prototype.resetKeyTypes = function () {
        this._keyTypes = undefined;
    };
    Object.defineProperty(DataAwsAcmCertificate.prototype, "keyTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "mostRecent", {
        get: function () {
            return this.getBooleanAttribute('most_recent');
        },
        set: function (value) {
            this._mostRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAcmCertificate.prototype.resetMostRecent = function () {
        this._mostRecent = undefined;
    };
    Object.defineProperty(DataAwsAcmCertificate.prototype, "mostRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mostRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "statuses", {
        get: function () {
            return this.getListAttribute('statuses');
        },
        set: function (value) {
            this._statuses = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAcmCertificate.prototype.resetStatuses = function () {
        this._statuses = undefined;
    };
    Object.defineProperty(DataAwsAcmCertificate.prototype, "statusesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statuses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAcmCertificate.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAcmCertificate.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmCertificate.prototype, "types", {
        get: function () {
            return this.getListAttribute('types');
        },
        set: function (value) {
            this._types = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAcmCertificate.prototype.resetTypes = function () {
        this._types = undefined;
    };
    Object.defineProperty(DataAwsAcmCertificate.prototype, "typesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._types;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsAcmCertificate.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            key_types: cdktf.listMapper(cdktf.stringToTerraform)(this._keyTypes),
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            statuses: cdktf.listMapper(cdktf.stringToTerraform)(this._statuses),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            types: cdktf.listMapper(cdktf.stringToTerraform)(this._types)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAcmCertificate.tfResourceType = "aws_acm_certificate";
    return DataAwsAcmCertificate;
}(cdktf.TerraformDataSource));
exports.DataAwsAcmCertificate = DataAwsAcmCertificate;
